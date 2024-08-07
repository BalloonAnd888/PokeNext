"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CommandList } from "cmdk";

import { FilterProp } from "@/types";

const Filter = ({ list, onFilter }: FilterProp) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSelect = (currentValue: string) => {
    if (currentValue === value) {
      setValue("");
      onFilter("");
      setOpen(false);
    } else {
      setValue(currentValue);
      onFilter(currentValue);
      setOpen(false);
    }
  };

  return (
    <div className="filter">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="default"
            role="combobox"
            aria-expanded={open}
            className=" capitalize w-[200px] justify-between bg-white h-11"
          >
            {value
              ? Object.keys(list).find((key) => list[key].name === value)
              : "Select type..."}

            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 bg-white">
          <Command>
            <CommandInput placeholder="Search type..." />
            <CommandEmpty>Type not found.</CommandEmpty>
            <CommandGroup>
              <CommandList className="capitalize ">
                {Object.keys(list).map((key) => (
                  <CommandItem
                    key={list[key].name}
                    value={list[key].name}
                    onSelect={(currentValue) => {
                      handleSelect(currentValue);
                    }}
                    className="hover:bg-gray-100"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === list[key].name ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {list[key].name}
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Filter;
