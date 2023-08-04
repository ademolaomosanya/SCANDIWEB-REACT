import * as React from "react"
const Stock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={172}
    height={19}
    fill="none"
    {...props}
  >
    <path
      fill="#8D8F9A"
      d="M8 18.12c-1.2 0-2.288-.24-3.264-.72a7.894 7.894 0 0 1-2.52-1.944 9.373 9.373 0 0 1-1.632-2.784A9.148 9.148 0 0 1 .008 9.48c0-1.136.2-2.216.6-3.24.4-1.04.96-1.96 1.68-2.76a8.131 8.131 0 0 1 2.568-1.92A7.08 7.08 0 0 1 8.024.84c1.2 0 2.288.248 3.264.744a7.77 7.77 0 0 1 2.496 1.992 9.373 9.373 0 0 1 1.632 2.784 8.886 8.886 0 0 1 .576 3.144 9.014 9.014 0 0 1-2.28 6.024 8.023 8.023 0 0 1-2.544 1.896A7.283 7.283 0 0 1 8 18.12ZM1.688 9.48c0 .928.152 1.824.456 2.688a7.465 7.465 0 0 0 1.296 2.28 6.608 6.608 0 0 0 1.992 1.584c.784.384 1.64.576 2.568.576.976 0 1.848-.2 2.616-.6a6.379 6.379 0 0 0 1.992-1.632 7.378 7.378 0 0 0 1.272-2.304 8.009 8.009 0 0 0-.024-5.256 7.21 7.21 0 0 0-1.32-2.28 6.15 6.15 0 0 0-1.992-1.584C9.776 2.568 8.928 2.376 8 2.376c-.96 0-1.832.2-2.616.6a6.3 6.3 0 0 0-1.992 1.632 7.748 7.748 0 0 0-1.272 2.28 8.009 8.009 0 0 0-.432 2.592Zm24.407 8.64c-1.344 0-2.48-.24-3.408-.72-.928-.48-1.664-1.12-2.208-1.92a8.762 8.762 0 0 1-1.2-2.76c-.24-1.024-.36-2.08-.36-3.168V.96h1.656v8.592c0 .88.088 1.744.264 2.592a7.4 7.4 0 0 0 .912 2.28 4.63 4.63 0 0 0 1.68 1.608c.704.384 1.584.576 2.64.576 1.088 0 1.984-.2 2.688-.6.72-.416 1.28-.96 1.68-1.632a7 7 0 0 0 .888-2.256c.176-.848.264-1.704.264-2.568V.96h1.68v8.592a13.61 13.61 0 0 1-.384 3.264c-.256 1.04-.672 1.952-1.248 2.736-.56.784-1.296 1.408-2.208 1.872-.912.464-2.024.696-3.336.696ZM49.373 2.448H43.3V18h-1.68V2.448h-6.072V.96h13.824v1.488Zm14.83 15.672c-1.2 0-2.288-.24-3.264-.72a7.894 7.894 0 0 1-2.52-1.944 9.373 9.373 0 0 1-1.632-2.784 9.148 9.148 0 0 1-.576-3.192c0-1.136.2-2.216.6-3.24.4-1.04.96-1.96 1.68-2.76a8.131 8.131 0 0 1 2.568-1.92 7.08 7.08 0 0 1 3.168-.72c1.2 0 2.288.248 3.264.744a7.77 7.77 0 0 1 2.496 1.992A9.373 9.373 0 0 1 71.62 6.36a8.886 8.886 0 0 1 .576 3.144 9.014 9.014 0 0 1-2.28 6.024 8.023 8.023 0 0 1-2.544 1.896 7.283 7.283 0 0 1-3.168.696Zm-6.312-8.64c0 .928.152 1.824.456 2.688a7.465 7.465 0 0 0 1.296 2.28 6.608 6.608 0 0 0 1.992 1.584c.784.384 1.64.576 2.568.576.976 0 1.848-.2 2.616-.6a6.379 6.379 0 0 0 1.992-1.632 7.378 7.378 0 0 0 1.272-2.304 8.009 8.009 0 0 0-.024-5.256 7.21 7.21 0 0 0-1.32-2.28 6.15 6.15 0 0 0-1.992-1.584c-.768-.384-1.616-.576-2.544-.576-.96 0-1.832.2-2.616.6a6.3 6.3 0 0 0-1.992 1.632 7.748 7.748 0 0 0-1.272 2.28 8.009 8.009 0 0 0-.432 2.592ZM75.363 18V.96h11.184v1.488h-9.504v6.264h8.016v1.392h-8.016V18h-1.68ZM105.01 4.152a4.072 4.072 0 0 0-.84-.72 5.32 5.32 0 0 0-1.08-.576c-.4-.16-.832-.288-1.296-.384a6.865 6.865 0 0 0-1.44-.144c-1.488 0-2.584.288-3.288.864-.688.56-1.032 1.328-1.032 2.304 0 .672.16 1.2.48 1.584.336.384.856.696 1.56.936.704.24 1.6.488 2.688.744 1.216.256 2.264.56 3.144.912.88.352 1.56.832 2.04 1.44.48.592.72 1.4.72 2.424 0 .784-.152 1.464-.456 2.04a4.066 4.066 0 0 1-1.272 1.44c-.544.384-1.192.672-1.944.864-.752.176-1.576.264-2.472.264-.88 0-1.728-.088-2.544-.264a11.04 11.04 0 0 1-2.28-.816 9.452 9.452 0 0 1-2.016-1.392l.84-1.368c.304.32.664.624 1.08.912.432.272.904.52 1.416.744.528.224 1.088.4 1.68.528.608.112 1.232.168 1.872.168 1.36 0 2.416-.248 3.168-.744.768-.496 1.152-1.232 1.152-2.208 0-.704-.192-1.264-.576-1.68-.384-.432-.96-.784-1.728-1.056s-1.712-.536-2.832-.792c-1.184-.272-2.184-.576-3-.912-.816-.336-1.432-.776-1.848-1.32-.4-.56-.6-1.296-.6-2.208 0-1.056.256-1.944.768-2.664.528-.736 1.248-1.288 2.16-1.656.912-.384 1.96-.576 3.144-.576.752 0 1.448.08 2.088.24.656.144 1.256.36 1.8.648a7.35 7.35 0 0 1 1.56 1.08l-.816 1.344Zm16.691-1.704h-6.072V18h-1.68V2.448h-6.072V.96h13.824v1.488Zm8.807 15.672c-1.2 0-2.288-.24-3.264-.72a7.894 7.894 0 0 1-2.52-1.944 9.373 9.373 0 0 1-1.632-2.784 9.148 9.148 0 0 1-.576-3.192c0-1.136.2-2.216.6-3.24.4-1.04.96-1.96 1.68-2.76a8.131 8.131 0 0 1 2.568-1.92 7.08 7.08 0 0 1 3.168-.72c1.2 0 2.288.248 3.264.744a7.77 7.77 0 0 1 2.496 1.992 9.373 9.373 0 0 1 1.632 2.784 8.886 8.886 0 0 1 .576 3.144 9.014 9.014 0 0 1-2.28 6.024 8.023 8.023 0 0 1-2.544 1.896 7.283 7.283 0 0 1-3.168.696Zm-6.312-8.64c0 .928.152 1.824.456 2.688a7.465 7.465 0 0 0 1.296 2.28 6.608 6.608 0 0 0 1.992 1.584c.784.384 1.64.576 2.568.576.976 0 1.848-.2 2.616-.6a6.379 6.379 0 0 0 1.992-1.632 7.378 7.378 0 0 0 1.272-2.304 8.009 8.009 0 0 0-.024-5.256 7.21 7.21 0 0 0-1.32-2.28 6.15 6.15 0 0 0-1.992-1.584c-.768-.384-1.616-.576-2.544-.576-.96 0-1.832.2-2.616.6a6.3 6.3 0 0 0-1.992 1.632 7.748 7.748 0 0 0-1.272 2.28 8.009 8.009 0 0 0-.432 2.592Zm16.343-.12c0-1.04.176-2.056.528-3.048a8.999 8.999 0 0 1 1.584-2.736 7.36 7.36 0 0 1 2.544-1.968c1.008-.496 2.152-.744 3.432-.744 1.52 0 2.816.352 3.888 1.056 1.088.688 1.888 1.576 2.4 2.664l-1.32.816c-.368-.752-.832-1.344-1.392-1.776a5.312 5.312 0 0 0-1.8-.96 6.336 6.336 0 0 0-1.872-.288c-1.024 0-1.928.208-2.712.624-.784.4-1.448.944-1.992 1.632a7.23 7.23 0 0 0-1.2 2.28 8.138 8.138 0 0 0-.408 2.544c0 .944.16 1.848.48 2.712a7.52 7.52 0 0 0 1.344 2.304 6.909 6.909 0 0 0 2.016 1.584 5.705 5.705 0 0 0 2.544.576c.64 0 1.296-.112 1.968-.336a5.985 5.985 0 0 0 1.872-1.032 4.965 4.965 0 0 0 1.416-1.8l1.392.72a5.389 5.389 0 0 1-1.632 2.16 7.892 7.892 0 0 1-2.472 1.344 8.185 8.185 0 0 1-2.64.456c-1.168 0-2.24-.248-3.216-.744a8.647 8.647 0 0 1-2.544-2.016 9.614 9.614 0 0 1-1.632-2.832 9.28 9.28 0 0 1-.576-3.192ZM158.12 18V.984h1.68v9.888L169.184.96h1.848l-6.96 7.488 7.32 9.552h-1.896l-6.504-8.544-3.192 3.312V18h-1.68Z"
    />
  </svg>
)
export default Stock