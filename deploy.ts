import s from 'shelljs';
const outDirBin = 'bin';
const outDirPublic = 'public';
const inDirBE = '../apiMemo-MongoDB/dist';
const inDirFE = '../dist/app-memo';

s.rm('-rf', outDirBin);
s.rm('-rf', outDirPublic);
s.mkdir(outDirBin);
s.mkdir(outDirPublic);
s.cp('-rf', `${inDirBE}/.`, `${outDirBin}/`);
s.cp('-rf', `${inDirFE}/.`, `${outDirPublic}/`);
