import React from "react";
import { nanoid } from "nanoid";
import {
  getMcqOptionCreatorGroupContainerStyle,
  getMcqOptionCreatorGroupStyle,
  getButtonTextStyles,
} from "./styles";
import {
  getMcqOptionCreatorModeStyles,
  getIconStyles,
  getOptionIconStyles,
} from "../styles";
import EnterIcon from "../../assets/icons/EnterIcon";
import McqOptionCreatorMode from "../McqOptionCreatorMode";
import CloseIcon from "../../assets/icons/CloseIcon";

interface Options {
  id: string | number;
  value: string;
}

interface McqOptionCreatorGroupProps {
  options: Options[];
  setOptions: any;
}

const CHARACTER = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const McqOptionCreatorGroup = ({
  options,
  setOptions,
}: McqOptionCreatorGroupProps) => {
  const handleOptionDelete = (id: string | number) => {
    const newOptions = options.filter((option) => {
      return option.id !== id;
    });
    setOptions(newOptions);
  };
  const handleValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string | number
  ) => {
    setOptions((prevOptions: Options[]) =>
      prevOptions.map((option) => {
        if (option.id === id) {
          return { ...option, value: event.target.value };
        } else {
          return option;
        }
      })
    );
  };
  const handleAddOptions = () => {
    setOptions([...options, { id: nanoid(), value: "" }]);
  };
  const handleDragDropMove = (dragIndex: number, hoverIndex: number) => {
    console.log(dragIndex,hoverIndex);
    setOptions((prevOptions: Options[]) => {
      // Create a copy of the options array
      const updatedOptions = [...prevOptions];
      console.log(updatedOptions)

      // Swap the elements at dragIndex and hoverIndex
      const dragOption = updatedOptions[dragIndex];
      updatedOptions[dragIndex] = updatedOptions[hoverIndex];
      updatedOptions[hoverIndex] = dragOption;

      return updatedOptions;
    });
  };

  return (
    <section
      style={{
        ...getMcqOptionCreatorGroupContainerStyle(),
        flexDirection: "column",
      }}
    >
      <div style={{ ...getMcqOptionCreatorGroupStyle(), flexWrap: "wrap" }}>
        {options.map((option, index) => {
          return (
            <McqOptionCreatorMode
              key={option.id}
              index={index}
              value={option.value}
              placeHolderText="Enter Your Question.."
              id={option.id}
              onValueChange={(event) => {
                handleValueChange(event, option.id);
              }}
              handleOptionDelete={() => {
                handleOptionDelete(option.id);
              }}
              optionIcon={CHARACTER[index]}
              hoverIcon={<CloseIcon />}
              moveOptions={handleDragDropMove}
            />
          );
        })}
      </div>
      <button
        style={{ ...getMcqOptionCreatorModeStyles() }}
        onClick={handleAddOptions}
      >
        <div style={{ ...getIconStyles(), ...getOptionIconStyles() }}>
          <EnterIcon />
        </div>
        <span style={{ ...getButtonTextStyles() }}>Add Options</span>
      </button>
    </section>
  );
};

export default McqOptionCreatorGroup;
