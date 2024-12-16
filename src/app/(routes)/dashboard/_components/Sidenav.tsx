import { useEffect, useState, useContext } from "react";
import { useMutation, useConvex } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import SidenavTopSection, { TEAM } from "./SidenavTopSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import SidenavBottomSection from "./SidenavBottomSection";
import { toast } from "sonner";
import { FileListContext } from "@/app/_context/FileListContext";

const Sidenav = () => {
  const [totalFiles, setTotalFiles] = useState<Number>();
  const { FileList, setFileList } = useContext(FileListContext);
  const [activeTeam, setActiveTeam] = useState<TEAM | any>();
  
  useEffect(() => {
    activeTeam && getFiles();
  }, [activeTeam]);
  const { user }: any = useKindeBrowserClient();
  
  const createFile = useMutation(api.files.createFile);
  
  const convex = useConvex();
  
  
  
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
    setFileList(result)
    setTotalFiles(result?.length)
  };

  return (
    <div className="dark:bg-gray-900/70 h-screen fixed w-72 border-r p-6 flex flex-col">
      <div className="flex-1">
        <SidenavTopSection
          user={user}
          setActiveTeamInfo={(activeTeam: TEAM) => setActiveTeam(activeTeam)}
        />
      </div>

      <div>
        <SidenavBottomSection
          onFileCreate={onFileCreate}
          totalFiles={totalFiles}
        />
      </div>
    </div>
  );
};

export default Sidenav;
