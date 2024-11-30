
import { useEffect, useState, useContext } from "react";
import { useMutation, useConvex } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
// import { FileListContext } from "@/app/_context/FileListContext";

import SidenavTopSection, { TEAM } from "./SidenavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SidenavBottomSection from "./SidenavBottomSection";
import { toast } from "sonner";

const Sidenav = () => {
  const [activeTeam, setActiveTeam] = useState<TEAM | any>();
  useEffect(() => {
    activeTeam && getFiles();
  }, [activeTeam]);
  const { user }: any = useKindeBrowserClient();
  const createFile = useMutation(api.files.createFile);
  const convex = useConvex();
  const [totalFiles, setTotalFiles] = useState<Number>();
  //const { fileList_, setFileList_ } = useContext(FileListContext);
  const onFileCreate = (fileName: string) => {
    console.log(fileName);
    createFile({
      fileName: fileName,
      teamId: activeTeam?._id,
      createdBy: user?.email,
      archive: false,
      document: "",
      whiteboard: "",
    }).then(
      (resp) => {
        if (resp) {
          getFiles();
          toast("File created successfully!");
        }
      },
      (e) => {
        toast("Error while creating file");
      }
    );
  };
  const getFiles = async () => {
    const result = await convex.query(api.files.getFiles, {
      teamId: activeTeam?._id,
    });
    console.log(result);
    //setFileList_(result);
    //setTotalFiles(result?.length)
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900/70 h-screen fixed w-72 border-r p-6 flex flex-col">
      <div className="flex-1">
        <SidenavTopSection
          user={user}
          setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)}
        />
      </div>

      <div>
        <SidenavBottomSection onFileCreate={onFileCreate} totalFiles={totalFiles}/>
      </div>
    </div>
  );
};

export default Sidenav;
