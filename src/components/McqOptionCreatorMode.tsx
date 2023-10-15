import React, { ChangeEvent } from "react";
import { useDrop } from "react-dnd";
import type { Identifier, XYCoord } from "dnd-core";
import {
  getMcqOptionCreatorModeStyles,
  getIconStyles,
  getOptionIconStyles,
  getHoverIconStyles,
  getInputStyles,
} from "./styles";
import DragIndicatorIcon from "../assets/icons/DragIndicatorIcon";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/ItemsType";

interface DragItem {
  value: string;
  index: number;
}

interface McqOptionCreatorModeProps {
  id: string | number;
  index: number;
  value: string;
  onValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleOptionDelete: () => void;
  optionIcon: React.ReactNode | string;
  hoverIcon: React.ReactNode | string;
  placeHolderText?: string;
  moveOptions: (dragIndex: number, hoverIndex: number) => void;
}

const McqOptionCreatorMode = ({
  hoverIcon,
  optionIcon,
  placeHolderText,
  value,
  onValueChange,
  handleOptionDelete,
  index,
  moveOptions,
}: McqOptionCreatorModeProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const hanldeMouseEnter = () => {
    setIsHover(true);
  };
  const hanldeMouseLeave = () => {
    setIsHover(false);
  };

  const [{ opacity }, drag] = useDrag(() => ({
    type: ItemTypes.OPTIONS,
    item: { value, index },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));
  const [collectedProps, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >(() => ({
    accept: ItemTypes.OPTIONS,
    drop: (item: DragItem, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveOptions(dragIndex, hoverIndex);
      item.index = hoverIndex
    },
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover() {
      if (!ref.current) {
        return;
      }
    },
  }));
  drag(drop(ref));
  return (
    <div
      style={{ ...getMcqOptionCreatorModeStyles(), opacity: opacity }}
      onMouseEnter={hanldeMouseEnter}
      onMouseLeave={hanldeMouseLeave}
      ref={ref}
    >
      <div>
        {isHover ? (
          <span
            onClick={handleOptionDelete}
            style={{ ...getIconStyles(), ...getHoverIconStyles() }}
          >
            {hoverIcon}
          </span>
        ) : (
          <span style={{ ...getIconStyles(), ...getOptionIconStyles() }}>
            {optionIcon}
          </span>
        )}
      </div>
      <form>
        <input
          ref={inputRef}
          type="text"
          placeholder={placeHolderText ? placeHolderText : "Options"}
          value={value}
          onChange={onValueChange}
          style={{ ...getInputStyles() }}
          onClick={() => {
            if (inputRef.current) {
              inputRef.current.select();
            }
          }}
        />
      </form>
      {isHover ? (
        <div>
          <DragIndicatorIcon />
        </div>
      ) : null}
    </div>
  );
};

export default McqOptionCreatorMode;
