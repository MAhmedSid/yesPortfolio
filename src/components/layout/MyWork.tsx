import React from "react";
import ProjectCard from "../atoms/ProjectCard";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MyWork = async () => {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/09dtk39yem6j/environments/master/entries?access_token=wDm073mDr7C_-Wkm73gTrCeBkmKCgNS4i6bupilJ1VE&content_type=project",
    { cache: "no-store" }
  );
  const data = await res.json();
  const allProjects = data.items;
  const ecommerceProjects = data.items.filter(
    (project: any) => project.fields.projType === "ecommerce"
  );
  const businessProjects = data.items.filter(
    (project: any) => project.fields.projType === "business"
  );
  const otherProjects = data.items.filter(
    (project: any) =>
      project.fields.projType !== "business" ||
      project.fields.projType !== "ecommerce"
  );
  const projectImgs = data.includes.Asset;




  return (
    <div id="Portfolio" className="flex mt-32 max-w-[100vw] min-h-[40vh] flex-col items-center justify-center">
      <h2 className="pb-5 text-6xl font-extrabold">My Works</h2>

      <Tabs defaultValue="all" className="mt-20 w-full">
        <TabsList className="flex justify-center bg-transparent ">
          <TabsTrigger className="bg-transparent" value="all">
            All
          </TabsTrigger>
          <TabsTrigger className="bg-transparent" value="ecommerce">
            E Commerce
          </TabsTrigger>
          <TabsTrigger className="bg-transparent" value="business">
            Business
          </TabsTrigger>
          <TabsTrigger className="bg-transparent" value="others">
            Others
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className={`grid grid-cols-1 ${allProjects.length=== 0 ? "md:grid-cols-1":"md:grid-cols-3"}`}>
          {allProjects.length === 0 ? (
            <p className="flex justify-center items-center w-full text-lg h-[368px]">No Projects Yet.</p>
          ) : (
            allProjects.map((project: any) => {
              const imgObj = projectImgs.find(
                (img: any) => img.sys.id === project.fields.imgSrc.sys.id
              );
              return (
                <ProjectCard
                  key={project.sys.id}
                  imgSrc={imgObj.fields.file.url}
                  imgAlt={project.fields.imgAlt}
                  projTitle={project.fields.projTitle}
                  projType={project.fields.projType}
                  githubLink={project.fields.githubLink}
                  visitLink={project.fields.visitLink}
                />
              );
            })
          )}
        </TabsContent>
        <TabsContent value="ecommerce" className={`grid grid-cols-1 ${ecommerceProjects.length=== 0 ? "md:grid-cols-1":"md:grid-cols-3"}`}>
          {ecommerceProjects.length === 0 ? (
            <p className="flex justify-center items-center w-full text-lg h-[368px]">No Projects Yet.</p>
          ) : (
            ecommerceProjects.map((project: any) => {
              const imgObj = projectImgs.find(
                (img: any) => img.sys.id === project.fields.imgSrc.sys.id
              );
              return (
                <ProjectCard
                  key={project.sys.id}
                  imgSrc={imgObj.fields.file.url}
                  imgAlt={project.fields.imgAlt}
                  projTitle={project.fields.projTitle}
                  projType={project.fields.projType}
                  githubLink={project.fields.githubLink}
                  visitLink={project.fields.visitLink}
                />
              );
            })
          )}
        </TabsContent>
        <TabsContent value="business" className={`grid grid-cols-1 ${businessProjects.length=== 0 ? "md:grid-cols-1":"md:grid-cols-3"}`}>
          {businessProjects.length === 0 ? (
            <p className="flex justify-center items-center w-full text-lg h-[368px]">No Projects Yet.</p>
          ) : (
            businessProjects.map((project: any) => {
              const imgObj = projectImgs.find(
                (img: any) => img.sys.id === project.fields.imgSrc.sys.id
              );
              return (
                <ProjectCard
                  key={project.sys.id}
                  imgSrc={imgObj.fields.file.url}
                  imgAlt={project.fields.imgAlt}
                  projTitle={project.fields.projTitle}
                  projType={project.fields.projType}
                  githubLink={project.fields.githubLink}
                  visitLink={project.fields.visitLink}
                />
              );
            })
          )}
        </TabsContent>
        <TabsContent value="others" className={`grid grid-cols-1 ${otherProjects.length=== 0 ? "md:grid-cols-1":"md:grid-cols-3"}`}>
          {otherProjects.length === 0 ? (
            <p className="flex justify-center items-center w-full text-lg h-[368px]">No Projects Yet.</p>
          ) : (
            otherProjects.map((project: any) => {
              const imgObj = projectImgs.find(
                (img: any) => img.sys.id === project.fields.imgSrc.sys.id
              );
              return (
                <ProjectCard
                  key={project.sys.id}
                  imgSrc={imgObj.fields.file.url}
                  imgAlt={project.fields.imgAlt}
                  projTitle={project.fields.projTitle}
                  projType={project.fields.projType}
                  githubLink={project.fields.githubLink}
                  visitLink={project.fields.visitLink}
                />
              );
            })
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyWork;
