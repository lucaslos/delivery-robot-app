import { css, Theme } from '@emotion/react';
import { tint } from '@src/utils/tint';
import { centerContent } from '@src/style/utils/centerContent';
import { fillContainer } from '@src/style/utils/fillContainer';
import { gridInline, gridStack } from '@src/style/utils/grid';
import { marginInline } from '@src/style/utils/logicalProperties';
import { transition } from '@src/style/utils/transition';
import { rgba } from '@src/utils/rgba';

export const calendarStyle = ({ colors, shadow }: Theme) => css`
  .react-datepicker {
    background: ${colors.bg.primary};
    border: 1px solid ${colors.border};
    box-shadow: ${shadow.modal};
    border-radius: 4px;
    position: relative;
    display: grid;
    border-radius: 4px;
    overflow: hidden;
    grid-auto-columns: 300px auto;
    grid-template-rows: auto auto;
  }

  .react-datepicker-popper {
    z-index: 999999999;
  }

  .react-datepicker__header {
    text-align: center;
    background-color: ${colors.bg.primary};
    padding-top: 8px;
    position: relative;

    &--time {
      padding-bottom: 8px;
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  .react-datepicker-time__header {
    font-weight: 500;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .react-datepicker__time-container {
    ${gridStack(['auto', '1fr'])};
    grid-row: 1 / span 2;
    grid-column: 2;
    width: 87px;
    border-left: 1px solid ${colors.border};

    .react-datepicker__time {
      position: relative;
      background: ${colors.bg.primary};

      .react-datepicker__time-box {
        ${fillContainer};
        overflow-x: hidden;

        ul.react-datepicker__time-list {
          ${fillContainer};
          height: auto !important;
          list-style: none;
          margin: 0;
          overflow-y: scroll;
          overflow-x: hidden;
          padding-right: 0px;
          padding-left: 0px;
          width: 100%;
          box-sizing: content-box;

          li.react-datepicker__time-list-item {
            height: 30px;
            font-size: 14px;
            padding: 6px 10px;
            white-space: nowrap;
            text-align: center;
            ${transition()};
            color: ${colors.text.secondary};

            &:hover {
              cursor: pointer;
              background-color: ${colors.bg.secondary};
            }

            &--selected {
              background-color: ${colors.primary};
              color: ${colors.bg.primary};
              font-weight: 500;

              &:hover {
                background-color: ${colors.primary};
              }
            }

            &--disabled {
              /* color: #ccc; */

              &:hover {
                cursor: default;
                background-color: transparent;
              }
            }
          }
        }
      }
    }
  }

  .react-datepicker__month {
    flex-grow: 1;
    display: grid;
    grid-auto-rows: 1fr;
    margin-bottom: 8px;
    ${marginInline(12)};
    border-radius: 4px;
    overflow: hidden;
    background: ${colors.bg.secondary};
  }

  .react-datepicker__day-names {
    margin-top: 12px;
    ${marginInline(12)};
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    flex-grow: 1;
    ${gridInline(['repeat(7, 1fr)'])};
    height: 32px;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: ${colors.text.secondary};
    ${centerContent};
    font-size: 14px;
    font-weight: 500;
  }

  .react-datepicker__day-name {
    text-transform: uppercase;
    font-weight: 400;
  }

  .react-datepicker__day,
  .react-datepicker__month-text,
  .react-datepicker__quarter-text {
    cursor: pointer;
    position: relative;
    z-index: 1;
    ${transition({ duration: 'short' })};

    &--outside-month {
      color: ${rgba(colors.text.secondary, 0.5)};
    }

    &::before {
      content: '';
      position: absolute;
      top: 2px;
      bottom: 2px;
      right: 2px;
      z-index: -1;
      left: 2px;
      opacity: 0;
      background: ${colors.primary};
      border-radius: 4px;
      ${transition({ duration: 'short' })};
    }

    &:last-of-type,
    &:first-of-type {
      background-color: ${tint(colors.primary, 0.9)};
    }

    &:focus {
      outline: none;
    }

    &:hover::before {
      opacity: 0.2;
    }

    &--today {
      font-weight: bold;
      color: ${colors.primary};
    }

    &--selected,
    &--in-selecting-range,
    &--in-range {
      color: ${colors.bg.primary};

      &::before,
      &:hover::before {
        opacity: 1;
      }
    }

    &--keyboard-selected {
      &::before,
      &:hover::before {
        opacity: 0.2;
      }
    }

    &--disabled {
      cursor: default;
      color: ${rgba(colors.text.secondary, 0.5)};

      &:hover {
        background-color: transparent;
      }
    }
  }

  .react-datepicker__month-text,
  .react-datepicker__quarter-text {
    &.react-datepicker__month--selected,
    &.react-datepicker__month--in-range,
    &.react-datepicker__quarter--selected,
    &.react-datepicker__quarter--in-range {
      &:hover {
        /* background-color: #216ba5; */
      }
    }
    &:hover {
      /* background-color: #f0f0f0; */
    }
  }

  .react-datepicker__year-read-view,
  .react-datepicker__month-read-view,
  .react-datepicker__month-year-read-view {
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
      cursor: pointer;

      .react-datepicker__year-read-view--down-arrow,
      .react-datepicker__month-read-view--down-arrow {
        /* border-top-color: #ccc; */
      }
    }
  }

  .react-datepicker__today-button {
    ${centerContent};
    grid-column: 1;
    grid-row: 2;
    margin: 8px;
    border-radius: 4px;
    margin-top: 0;
    cursor: pointer;
    height: 32px;
    font-weight: 500;
    color: ${colors.primary};
    padding: 1px 0;
    clear: left;
    ${transition()};

    &:hover {
      background: ${colors.bg.secondary};
    }
  }
`;
