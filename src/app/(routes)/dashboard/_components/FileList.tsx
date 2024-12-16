import { FileListContext } from "@/app/_context/FileListContext";
import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { Archive, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

const FileList = () => {
  const router = useRouter()
  const { user }: any = useKindeBrowserClient();
  const { FileList, setFileList } = useContext(FileListContext);
  const [fileList_, setFileList_] = useState();

  useEffect(() => {
    fileList_ && setFileList_(FileList);
    console.log(FileList);
  }, [FileList]);

  return (
    <div className="mt-10">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                File Name
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Created At
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Edited
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                Author
              </td>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {FileList &&
              FileList.map((item: any, index: Number) => (
                <tr onClick={()=>router.push('/workspace/' + item?._id)} className="cursor-pointer">
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {item?.fileName}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {moment(item?.creationTime).format("DD/MM/YYYY")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {moment(item?.creationTime).format("DD/MM/YYYY")}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <Image
                      src={user?.picture}
                      height={30}
                      width={30}
                      alt="user"
                      className="rounded-full"
                    />
                  </td>
                  <td>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        {" "}
                        <MoreHorizontal />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-3">
                          <Archive className="h-4"/> Archive
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileList;
