/**
 * 简单的字符串哈希函数
 * 将任意字符串转换为一个数字
 */
function hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
}

/**
 * 将任意文本转换为固定的HSL颜色
 * 使用大质数来增加散列效果，使得相似字符串产生差异较大的颜色
 * @param text 任意文本
 * @returns HSL格式的颜色字符串
 */
export function getColorFromText(text: string): string {
    const hash = hashString(text);

    // 使用大质数（179）来增加散列效果
    const hue = (hash * 179) % 360;

    // 固定使用较高的饱和度和亮度，确保颜色鲜明但不刺眼
    return `hsl(${hue}, 75%, 92%)`;
} 