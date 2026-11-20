/**
 * 現在日時を 'yyyy/MM/dd HH:mm:ss' 形式の文字列で取得します（JST基準）
 */
export function getFormattedTimestamp() {
    const now = new Date();
    return new Intl.DateTimeFormat('ja-JP', {
        timeZone: 'Asia/Tokyo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    }).format(now);
}
//# sourceMappingURL=uty.js.map