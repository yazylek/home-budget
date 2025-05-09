import {
  BadgeDollarSign,
  Bell,
  BookText,
  ChartNoAxesCombined,
  FileText,
  House,
  Menu,
  User,
} from "lucide-react";
import SelectCompany from "./SelectCompany";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header>
      <div className="bg-white flex justify-between items-center px-6 w-screen h-16 shadow-md fixed z-30">
        <div>
          <Sheet>
            <SheetTrigger className="cursor-pointer md:hidden">
              {" "}
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="text-3xl font-bold flex items-center gap-1">
                  <BookText size={34} />
                  Invoices
                </SheetTitle>
                <Separator className="mb-4" />
              </SheetHeader>
              <SheetDescription className="flex flex-col items-start gap-6 ">
                <Button
                  variant={"ghost"}
                  className="text-xl text-black w-full  flex justify-start gap-3 !pl-6  cursor-pointer "
                >
                  <House className="scale-150 " />
                  Dashboard
                </Button>

                <Button
                  variant={"ghost"}
                  className="text-xl text-black w-full  flex justify-start gap-3 !pl-6 cursor-pointer"
                >
                  <BadgeDollarSign className="scale-150" />
                  Transactions
                </Button>

                <Button
                  variant={"ghost"}
                  className="text-xl text-black w-full  flex justify-start gap-3 !pl-6 cursor-pointer"
                >
                  <FileText className="scale-150" />
                  Invoices
                </Button>

                <Button
                  variant={"ghost"}
                  className="text-xl text-black w-full  flex justify-start gap-3 !pl-6 cursor-pointer"
                >
                  <ChartNoAxesCombined className="scale-150" />
                  Analytics
                </Button>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center gap-6">
          <SelectCompany />
          <Bell className=" cursor-pointer" size={24} />
          <User className=" cursor-pointer" size={24} />
        </div>
      </div>
    </header>
  );
};
export default Header;
