//--dependancies--
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//--components--
import { Container } from "../container"
import { StyledButton } from "../button"

//--styles--
import { COLORS } from "../../styles/colors"
import { StyledH1, StyledH2 } from "../../library/headings/headings"
//--styled-components

const StyledSpan = styled.span`
  height: 100%;
  background: #0000004a;
  width: 100%;
`

const SvgBox = styled(Container)`
  position: absolute;
  right: 0;
`

const HeroContents = () => {
  return (
    <StyledSpan>
      <Container
        className="thisone"
        maxWidth="unset"
        padding="0"
        position="relative"
      >
        <Container
          flexDirection="column"
          justifyContent="center"
          padding="0 0 0 60px"
          position="relative"
        >
          <StyledH1 fontSize="4.5rem" padding="0 0 .5em 0" textAlign="left">
            Professional <br /> carpet cleaning <br />
            and pest control
          </StyledH1>
          <StyledButton
            padding="1em 2em"
            fontSize="1.2rem"
            weight="500"
            borderRadius="30px"
            background={COLORS.orange}
            border={`2px solid transparent`}
            color={COLORS.white}
            hoverColor={COLORS.white}
            hoverBackground="transparent"
            hoverBorder={`2px solid ${COLORS.orange}`}
          >
            Free Quote
          </StyledButton>
        </Container>
        <SvgBox
          justifyContent="flex-end"
          position="relative"
          width="auto"
          otherCss="svg{height:100%; width:auto;} svg.number{position:absolute; width: 60%; height:auto; bottom: 100px; right: 20px;}"
        >
          <svg
            width="auto"
            height="100%"
            viewBox="0 0 437 1005"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M437 1005V0H333L37 1005H437Z" fill="#FE4F00" />
            <path
              d="M170.053 903.426C176.196 903.426 180.705 898.775 180.705 890.573C180.705 882.371 176.196 877.719 170.053 877.719C163.946 877.719 159.401 882.371 159.401 890.573C159.401 898.775 163.946 903.426 170.053 903.426ZM170.053 898.562C167.213 898.562 165.224 896.218 165.224 890.573C165.224 884.927 167.213 882.584 170.053 882.584C172.929 882.584 174.918 884.927 174.918 890.573C174.918 896.218 172.929 898.562 170.053 898.562ZM206.26 893.094H202.212V888.442H196.78V893.094H190.104L200.97 878.145H194.933L183.216 893.91V897.78H196.602V903H202.212V897.78H206.26V893.094ZM219.946 887.412C217.354 887.412 215.259 888.158 213.804 889.614C213.981 884.856 216.644 882.406 220.798 882.406C222.467 882.406 224.065 882.726 225.45 883.649L227.58 879.423C225.84 878.323 223.284 877.719 220.656 877.719C213.164 877.719 207.98 882.513 207.98 891.105C207.98 899.13 212.241 903.426 219.094 903.426C224.349 903.426 228.503 900.23 228.503 895.153C228.503 890.466 224.74 887.412 219.946 887.412ZM218.775 899.13C216.005 899.13 214.407 897.567 214.407 895.437C214.407 893.271 216.183 891.709 218.704 891.709C221.26 891.709 222.929 893.165 222.929 895.437C222.929 897.709 221.225 899.13 218.775 899.13ZM229.988 878.145V886.88H235.101V882.832H243.339L234.426 903H240.676L249.907 881.873V878.145H229.988ZM274.489 887.412C271.897 887.412 269.803 888.158 268.347 889.614C268.524 884.856 271.187 882.406 275.342 882.406C277.01 882.406 278.608 882.726 279.993 883.649L282.123 879.423C280.384 878.323 277.827 877.719 275.2 877.719C267.708 877.719 262.524 882.513 262.524 891.105C262.524 899.13 266.785 903.426 273.637 903.426C278.892 903.426 283.047 900.23 283.047 895.153C283.047 890.466 279.283 887.412 274.489 887.412ZM273.318 899.13C270.548 899.13 268.95 897.567 268.95 895.437C268.95 893.271 270.726 891.709 273.247 891.709C275.803 891.709 277.472 893.165 277.472 895.437C277.472 897.709 275.768 899.13 273.318 899.13ZM307.891 893.094H303.844V888.442H298.411V893.094H291.736L302.601 878.145H296.565L284.848 893.91V897.78H298.234V903H303.844V897.78H307.891V893.094ZM332.372 893.094H328.324V888.442H322.891V893.094H316.216L327.081 878.145H321.045L309.328 893.91V897.78H322.714V903H328.324V897.78H332.372V893.094ZM352.669 887.484H350.646L351.036 882.761H361.404V878.145H346.243L344.964 892.135H351.32C355.83 892.135 357.108 893.413 357.108 895.366C357.108 897.39 355.332 898.597 352.456 898.597C349.864 898.597 347.272 897.78 345.391 896.36L343.118 900.763C345.533 902.467 349.154 903.426 352.598 903.426C359.7 903.426 362.931 899.591 362.931 895.188C362.931 890.786 360.019 887.484 352.669 887.484ZM377.231 887.412C374.639 887.412 372.544 888.158 371.088 889.614C371.265 884.856 373.928 882.406 378.083 882.406C379.751 882.406 381.349 882.726 382.734 883.649L384.864 879.423C383.125 878.323 380.568 877.719 377.941 877.719C370.449 877.719 365.265 882.513 365.265 891.105C365.265 899.13 369.526 903.426 376.378 903.426C381.633 903.426 385.788 900.23 385.788 895.153C385.788 890.466 382.024 887.412 377.231 887.412ZM376.059 899.13C373.289 899.13 371.691 897.567 371.691 895.437C371.691 893.271 373.467 891.709 375.988 891.709C378.544 891.709 380.213 893.165 380.213 895.437C380.213 897.709 378.509 899.13 376.059 899.13ZM404.88 889.933C406.727 888.797 407.792 887.057 407.792 884.82C407.792 880.453 403.886 877.719 398.17 877.719C392.524 877.719 388.618 880.453 388.618 884.82C388.618 887.057 389.648 888.797 391.494 889.933C389.115 891.141 387.731 893.129 387.731 895.792C387.731 900.479 391.885 903.426 398.17 903.426C404.49 903.426 408.68 900.479 408.68 895.792C408.68 893.129 407.295 891.141 404.88 889.933ZM398.17 881.944C400.513 881.944 402.075 883.116 402.075 885.069C402.075 886.951 400.549 888.123 398.17 888.123C395.826 888.123 394.335 886.951 394.335 885.069C394.335 883.116 395.862 881.944 398.17 881.944ZM398.17 899.201C395.329 899.201 393.554 897.816 393.554 895.615C393.554 893.413 395.329 892.064 398.17 892.064C401.046 892.064 402.856 893.413 402.856 895.615C402.856 897.816 401.046 899.201 398.17 899.201Z"
              fill="white"
            />
            <g filter="url(#filter0_d)">
              <circle cx="70" cy="890" r="59" fill="white" />
            </g>
            <path
              d="M99.6871 881.459C99.6099 881.848 99.6063 882.25 99.4556 882.618C98.5618 884.775 96.8909 886.561 95.6579 888.55C94.0696 891.087 80.5749 885.619 82.314 882.23C82.9691 880.978 85.523 877.517 85.7168 876.126C85.8927 874.886 84.2487 873.913 82.7304 873.788C78.7263 873.465 73.6059 873.757 69.3542 873.784V873.788C69.2411 873.788 69.1155 873.788 69.0006 873.786C68.884 873.788 68.7584 873.788 68.6471 873.788V873.784C64.3935 873.757 59.2767 873.465 55.2709 873.788C53.7525 873.913 52.1086 874.886 52.2844 876.128C52.4765 877.519 55.0322 880.979 55.6873 882.232C57.43 885.621 43.9299 891.089 42.3416 888.551C41.1068 886.565 39.4395 884.777 38.5457 882.62C38.395 882.252 38.3896 881.848 38.3124 881.46C36.3328 872.612 43.964 863.585 55.454 862.66C59.8439 862.303 64.2428 862.102 68.6471 862.025V862C68.7655 862.004 68.8822 862.011 69.0006 862.013C69.1191 862.011 69.2358 862.004 69.3542 862V862.023C73.7567 862.102 78.1556 862.302 82.5455 862.659C94.0372 863.583 101.668 872.614 99.6871 881.459ZM91.7974 911.987C91.9213 914.11 90.5357 915.842 88.7051 915.842H49.2944C47.4692 915.842 46.0782 914.107 46.2039 911.987L47.3543 892.634C51.5307 891.656 56.8682 889.101 58.8047 885.927C59.8834 884.16 59.9982 882.169 59.1116 880.445C58.8873 880.014 58.4673 879.341 57.9845 878.591L57.9827 878.587C57.9684 878.553 57.9684 878.553 57.9576 878.53H79.4101C79.3994 878.56 79.3958 878.565 79.3778 878.609C79.1086 879.256 79.0171 879.754 79.0673 880.129C79.0063 880.238 78.9202 880.376 78.8735 880.466C77.9977 882.167 78.1125 884.16 79.1912 885.926C81.1277 889.102 86.4617 891.653 90.638 892.631L91.7974 911.987ZM76.5385 891.9C72.4071 887.771 65.6929 887.771 61.5597 891.9C57.43 896.03 57.43 902.748 61.5597 906.877C65.2981 910.616 71.1525 910.957 75.2912 907.929L72.7014 905.343C70.0057 906.998 66.4306 906.675 64.0974 904.34C61.3676 901.61 61.3676 897.17 64.0992 894.438C66.829 891.708 71.2692 891.708 74.0008 894.438C76.3232 896.761 76.6516 900.31 75.0202 903.003L77.6136 905.596C80.618 901.457 80.2644 895.628 76.5385 891.9Z"
              fill="#FE4F00"
            />
            <path
              d="M228.954 844.288C231.882 844.288 234.306 843.232 235.89 841.288L233.394 838.984C232.266 840.304 230.85 840.976 229.17 840.976C226.026 840.976 223.794 838.768 223.794 835.6C223.794 832.432 226.026 830.224 229.17 830.224C230.85 830.224 232.266 830.896 233.394 832.192L235.89 829.888C234.306 827.968 231.882 826.912 228.978 826.912C223.746 826.912 219.858 830.536 219.858 835.6C219.858 840.664 223.746 844.288 228.954 844.288ZM243.366 830.896C241.302 830.896 239.214 831.448 237.798 832.456L239.142 835.072C240.078 834.328 241.494 833.872 242.862 833.872C244.878 833.872 245.838 834.808 245.838 836.416H242.862C238.926 836.416 237.318 838 237.318 840.28C237.318 842.512 239.118 844.192 242.142 844.192C244.038 844.192 245.382 843.568 246.078 842.392V844H249.582V836.632C249.582 832.72 247.302 830.896 243.366 830.896ZM243.078 841.672C241.758 841.672 240.966 841.048 240.966 840.112C240.966 839.248 241.518 838.6 243.27 838.6H245.838V839.92C245.406 841.096 244.326 841.672 243.078 841.672ZM252.97 844H256.714V826.192H252.97V844ZM260.189 844H263.933V826.192H260.189V844ZM281.933 844.288C286.709 844.288 289.541 841.552 289.541 836.608V827.2H285.701V836.464C285.701 839.656 284.333 840.976 281.957 840.976C279.605 840.976 278.213 839.656 278.213 836.464V827.2H274.325V836.608C274.325 841.552 277.157 844.288 281.933 844.288ZM297.463 844.192C301.327 844.192 303.559 842.488 303.559 840.088C303.559 835 295.759 837.136 295.759 834.928C295.759 834.256 296.479 833.728 298.159 833.728C299.335 833.728 300.607 833.968 301.879 834.688L303.127 832.024C301.903 831.304 299.935 830.896 298.159 830.896C294.391 830.896 292.183 832.624 292.183 835.072C292.183 840.232 299.983 838.072 299.983 840.184C299.983 840.904 299.335 841.36 297.607 841.36C296.023 841.36 294.271 840.856 293.119 840.112L291.871 842.8C293.071 843.592 295.279 844.192 297.463 844.192ZM306.133 838.168H309.109L309.853 827.2H305.389L306.133 838.168ZM307.621 844.192C308.965 844.192 309.925 843.208 309.925 842.008C309.925 840.784 308.965 839.872 307.621 839.872C306.277 839.872 305.317 840.784 305.317 842.008C305.317 843.208 306.277 844.192 307.621 844.192Z"
              fill="white"
            />
            <g filter="url(#filter1_b)">
              <path
                d="M219 854C244.047 848.317 265.578 847.359 313 848.332"
                stroke="black"
                stroke-width="3"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="820"
                width="140"
                height="140"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feMorphology
                  radius="7"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.24 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_b"
                x="214.668"
                y="842.5"
                width="102.363"
                height="16.963"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </SvgBox>
      </Container>
    </StyledSpan>
  )
}

export default HeroContents
