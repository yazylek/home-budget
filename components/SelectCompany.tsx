import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectCompany = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Company" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All">All</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default SelectCompany;
