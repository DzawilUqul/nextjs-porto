import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";
import { worksContent } from "@/app/Contents/content";

const worksContentCards = Object.values(worksContent).map((item) => item.cards);

interface WorkItemProps {
  loadMoreButton: boolean;
}

const Works: React.FC<WorkItemProps> = ( {loadMoreButton=false} ) => {
  // extract unique categories from data
  const uniqueCategories = Array.from(
    new Set(worksContentCards.map((item) => item.category))
  );

  const tabData = [...uniqueCategories.map((category) => ({ category }))];

  const [tabValue, setTabValue] = useState("All");

  const filterWork =
    tabValue === "All"
      ? worksContentCards.filter((item) => item.category !== "All")
      : worksContentCards.filter((item) => item.category === tabValue);

  return (
    <div id="work">
      <div className="container mx-auto">
        <Tabs defaultValue="All" value={tabValue} onValueChange={setTabValue} className="w-full flex flex-col mt-10">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
            <AnimatedText
              text="My Latest Work"
              textStyles="h2 mb-[30px] xl:mb-0"
            />
            {/* render tab triggers */}
            <TabsList className="max-w-max">
              {tabData.map((item, index) => {
                return (
                  <TabsTrigger
                    value={item.category}
                    key={index}
                    className="capitalize w-[120px]"
                  >
                    {item.category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* render content for the selected tab */}
          <TabsContent value={tabValue} forceMount className="w-full">
            <motion.div
              key={tabValue} // Ensures unique animations per tab
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
                <AnimatePresence>
                  {(loadMoreButton ? filterWork.slice(0, 3) : filterWork).map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <WorkItem {...item} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
        {loadMoreButton && (
          <div className="flex justify-center mt-5">
            {/* go to /journey */}
            <button className='btn btn-accent bg-violet-500' onClick={() => window.location.href = '/works'}>
              More Works
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Works;
