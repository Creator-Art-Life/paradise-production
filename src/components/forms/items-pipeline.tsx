'use client'

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk"; // Assuming you're using cmdk

// CustomCommandItem definition
// Обновленный интерфейс
// Обновленный интерфейс с использованием Omit
interface CustomCommandItemProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onSelect"> {
  status?: "success" | "error"; // Проп статуса
  value?: string; // Проп value
  onSelect?: (value: string) => void; // Кастомный onSelect
}

const CustomCommandItem = React.forwardRef<
  HTMLDivElement,
  CustomCommandItemProps
>(({ status, children, value, onSelect, ...props }, ref) => {
  const handleClick = () => {
    if (onSelect && value) {
      onSelect(value); // Передаем значение в кастомный onSelect
    }
  };

  return (
    <div
      ref={ref}
      onClick={handleClick} // Используем кастомный обработчик
      className={`relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none 
        ${status === "success"
          ? "bg-green-100 text-green-700"
          : status === "error"
            ? "bg-red-100 text-red-700"
            : ""
        }
        hover:bg-gray-100 focus:bg-gray-200`}
      {...props}
    >
      {/* Иконки статуса */}
      {status === "success" ? (
        <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
      ) : status === "error" ? (
        <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
      ) : null}

      {/* Основное содержимое */}
      {children}
    </div>
  );
});

CustomCommandItem.displayName = "CustomCommandItem";






// New CustomCommandEmpty definition
const CustomCommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> & {
    children?: React.ReactNode; // Optional children prop
  }
>(({ children, ...props }, ref) => {
  return (
    <CommandPrimitive.Empty
      ref={ref}
      className="py-6 text-center text-sm text-gray-500"
      {...props}
    >
      {children || "Nothing found."}
    </CommandPrimitive.Empty>
  );
});

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
))

CommandEmpty.displayName = "CommandEmpty"

CustomCommandEmpty.displayName = "CustomCommandEmpty";


export { CustomCommandItem, CustomCommandEmpty, CommandEmpty };
