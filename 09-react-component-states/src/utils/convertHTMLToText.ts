/**
 * HTML 문자열에서 태그를 제거하고 텍스트로 변환
 * 닫는 태그는 줄바꿈 2개로 처리
 */
export function convertHTMLToText(htmlString: string): string {
  return htmlString
    .replace(/<[^>]+>/g, (match: string) => {
      if (match.includes('/')) return '\n\n';
      return '';
    })
    .trim();
}

/**
 * 텍스트를 HTML 문자열로 변환 (줄바꿈 기준 → 태그 감싸기)
 */
export function convertTextToHTMLString(text: string, tagName: string = 'p'): string {
  return text
    .split('\n')
    .filter(Boolean)
    .map((line: string) => `<${tagName}>${line}</${tagName}>`)
    .join('');
}