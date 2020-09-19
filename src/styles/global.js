import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  min-height: 100%;
}

input:-webkit-autofill {
  box-shadow: 0 0 0 30px ${(props) => props.theme.InputBackground} inset;
    -webkit-box-shadow: 0 0 0 30px ${(props) =>
      props.theme.InputBackground} inset;
}

input:-webkit-autofill {
    -webkit-text-fill-color: ${(props) =>
      props.theme.textColorPrimary} !important;
}

${'' /* material ui */}

.MuiOutlinedInput-notchedOutline {
  border-color: ${(props) => props.theme.borderColor}!important;
}
.MuiInput-underline:before {
  border-bottom: 1px solid ${(props) => props.theme.textColorPrimary}!important;
}


.StyledDropZone{
  background: ${(props) => props.theme.selectBackground};
}

.css-1hivdsp-control {
  min-height: 31px!important;
}

.css-11hpcgx-control {
  min-height: 31px!important;
}

.MuiFormControl-marginNormal {
         margin-top: 0!important;
     margin-bottom: 0!important;
}

.MuiAutocomplete-root {
  width: 100%!important;
}

.MuiAutocomplete-option {
  font-size: 1.4rem!important;
}

.MuiButton-root {
  color: #414D55!important;
}

.MuiAutocomplete-paper {
  background: ${(props) => props.theme.backgroundSecondary}!important;
  color: ${(props) => props.theme.textColorPrimary}!important;
}

.MuiSvgIcon-root {
  height: 2rem!important;
  width: 2rem!important;
  color:${(props) =>
    props.theme.mode === 'dark' ? props.theme.textColorPrimary : ``}!important;
}

.MuiSkeleton-root {
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? `rgba(61, 61, 61, 0.51)` : ``}!important;
}

.MuiChip-root {
  background: ${(props) => props.theme.background}!important;
}



.MuiPaginationItem-textPrimary.Mui-selected {
  color: #fff!important;
}


.MuiChip-label {
  color: ${(props) => props.theme.textColorPrimary}!important;
}

.MuiFormHelperText-root.Mui-error {
  color: #f44336!important;
}

.MuiInput-underline:after {
  border-bottom: 2px solid #fe650e!important;
}

.MuiInput-underline.Mui-error:after {
    transform: scaleX(1);
    border-bottom-color: #f44336!important;
}


${'' /* apexcharts */}

.apexcharts-text {
  fill: ${(props) => props.theme.textColorPrimary};
}


.apexcharts-legend-text {
  color: ${(props) => props.theme.textColorPrimary}!important;
}

.apexcharts-pie-label,
.apexcharts-datalabels,
.apexcharts-datalabel,
.apexcharts-datalabel-label,
.apexcharts-datalabel-value {
  fill: ${(props) => props.theme.textColorPrimary}!important;
}

.apexcharts-tooltip.apexcharts-theme-light {
  background: ${(props) => props.theme.checkBoxBackground};
  color: ${(props) => props.theme.textColorPrimary};
}

.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
  background: ${(props) => props.theme.checkBoxBackground};
}

.apexcharts-menu {
  background: ${(props) => props.theme.checkBoxBackground};
}

.apexcharts-menu-item {
  color: ${(props) => props.theme.textColorPrimary};
}

.apexcharts-theme-light .apexcharts-menu-item:hover {
  color: ${(props) => props.theme.backgroundSecondary};
  background: ${(props) => props.theme.textColorPrimary};
}

.swal-text {
  text-align: center;
}
.swal-footer {
  text-align: center;
}

${'' /* editor */}

.ck.ck-editor {
    position: relative;
    color: ${(props) => props.theme.textColorPrimary};
}

.ck {
  transition: 0.5s;
  border-color: ${(props) => props.theme.selectBackground}!important;
  background: ${(props) => props.theme.backgroundSecondary};
  border: none!important;
  height: 80vh;
  border-radius: 8px!important;


  ul,ol {
    margin-left: 2rem;
  }

}

.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused {
  box-shadow: none!important;
}



.ck.ck-editor__main>.ck-editor__editable {
  background: ${(props) => props.theme.backgroundSecondary};
}

.ck.ck-reset, .ck.ck-reset_all, .ck.ck-reset_all  {
  background: ${(props) => props.theme.backgroundSecondary};
}
.ck.ck-list__item .ck-button.ck-on {
  color: ${(props) => props.theme.textColorPrimary};
}

.ck.ck-list__item .ck-button:hover:not(.ck-disabled) {
  background: ${(props) => props.theme.background};
}

.ck.ck-button:not(.ck-disabled):active, a.ck.ck-button:not(.ck-disabled):active {
  background: ${(props) => props.theme.background}!important;
}

.ck.ck-button.ck-on:not(.ck-disabled):hover, a.ck.ck-button.ck-on:not(.ck-disabled):hover {
  background: ${(props) => props.theme.background}!important;
}

.ck.ck-button.ck-on, a.ck.ck-button.ck-on {
  background: ${(props) => props.theme.background}!important;
}
.ck.ck-button:not(.ck-disabled):hover, a.ck.ck-button:not(.ck-disabled):hover {
  background: ${(props) => props.theme.background}!important;
}

.ck.ck-toolbar {
  background: ${(props) => props.theme.backgroundSecondary};
}

.ck.ck-reset_all, .ck.ck-reset_all * {
  color: ${(props) => props.theme.textColorPrimary};
}

.ck.ck-editor__editable_inline {
  font-size: 1.6rem!important;
  padding: 2rem;
}


${'' /* toast */}

.Toastify__toast {
  font-size: 1.4rem;
}

${'' /* scroll */}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #636269;
  border: 0px none ${(props) => props.theme.backgroundSecondary};
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #636269;
}
::-webkit-scrollbar-thumb:active {
  background: #636269;
}
::-webkit-scrollbar-track {
  background: ${(props) => props.theme.backgroundSecondary};
  border: 0px none ${(props) => props.theme.backgroundSecondary};
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: ${(props) => props.theme.backgroundSecondary};
}
::-webkit-scrollbar-track:active {
  background: ${(props) => props.theme.backgroundSecondary};
}
::-webkit-scrollbar-corner {
  background: transparent;
}


.Toastify__toast-container {
  z-index: 9999;
}

${'' /* skeleton */}

.MuiSkeleton-text {
  transform: initial !important;
}

.MuiSkeleton-wave {

  border-radius: 10px!important;
}
`;
