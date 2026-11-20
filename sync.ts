import s from "shelljs";
import fs from "node:fs";
import path from "node:path";

// 1. ESM 構成（Node.js v20.11 / v22+）標準の import.meta.dirname でルートを特定
const deployRoot = import.meta.dirname;

// 2. 兄弟配置の monorepo20 へのパス定義
const monorepoRoot = path.resolve(deployRoot, "../monorepo20");
const inDirBE = path.join(monorepoRoot, "apiMemo-MongoDB/dist");
// ※ angular.json で "browser": "" に変更済みの場合は '/browser' を外してください
const inDirFE = path.join(monorepoRoot, "dist/app/browser");

const outDirBin = path.join(deployRoot, "bin");
const outDirPublic = path.join(deployRoot, "public");

s.echo(`🚀 Syncing build artifacts to: ${deployRoot}`);
s.echo(`Node version: ${process.version}`);

// 3. ビルド成果物の存在チェック
if (!fs.existsSync(inDirBE) || !fs.existsSync(inDirFE)) {
  s.echo(
    "❌ Error: ビルド成果物が見つかりません。先に monorepo20 でビルドを実行してください。",
  );
  s.echo(`  BE (${inDirBE}): ${fs.existsSync(inDirBE) ? "OK" : "Missing"}`);
  s.echo(`  FE (${inDirFE}): ${fs.existsSync(inDirFE) ? "OK" : "Missing"}`);
  process.exit(1);
}

// 4. 出力先のクリーンアップと再作成
s.rm("-rf", outDirBin, outDirPublic);
s.mkdir("-p", outDirBin, outDirPublic);

// 5. ビルド成果物のコピー
s.cp("-rf", `${inDirBE}/.`, `${outDirBin}/`);
s.cp("-rf", `${inDirFE}/.`, `${outDirPublic}/`);

// 6. セキュリティ対策：ローカル確認用にルート直下へ .env をコピーし、bin/ からは削除
const copiedEnvPath = path.join(outDirBin, ".env");
const rootEnvPath = path.join(deployRoot, ".env");
if (fs.existsSync(copiedEnvPath)) {
  s.cp("-f", copiedEnvPath, rootEnvPath);
  s.rm("-f", copiedEnvPath);
  s.echo("✅ Copied .env to root & removed from bin/ (Security)");
}

// 7. apiMemo-MongoDB/package.json と同期（"type": "module" や dependencies を完全一致させる）
const bePkgPath = path.join(monorepoRoot, "apiMemo-MongoDB/package.json");
const deployPkgPath = path.join(deployRoot, "package.json");

if (fs.existsSync(bePkgPath)) {
  const bePkg = JSON.parse(fs.readFileSync(bePkgPath, "utf-8"));
  const currentDeployPkg = fs.existsSync(deployPkgPath)
    ? JSON.parse(fs.readFileSync(deployPkgPath, "utf-8"))
    : {};

  const updatedPkg: Record<string, unknown> = {
    name: bePkg.name || "apimemo",
    version: bePkg.version || "1.0.0",
    description: bePkg.description || "Production deployment for apiMemo",
    engines: {
      node: ">=22.0.0",
    },
    type: "module",
    main: "bin/index.js",
    scripts: {
      sync: "node sync.ts",
      typecheck: "tsc --noEmit",
      start: "node bin/index.js",
    },
    dependencies: bePkg.dependencies || {},
    devDependencies: currentDeployPkg.devDependencies || {
      "@types/node": "^22.0.0",
      "@types/shelljs": "^0.10.0",
      shelljs: "^0.10.0",
      typescript: "~6.0.3",
    },
    license: bePkg.license || "MIT",
  };

  fs.writeFileSync(deployPkgPath, JSON.stringify(updatedPkg, null, 2) + "\n");
  s.echo("✅ package.json synced (ESM mode).");
}

s.echo("✨ Sync completed successfully!");
