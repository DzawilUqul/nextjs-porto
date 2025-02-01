import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

import Card from "./Card";
import { content } from "@/app/Contents/content";

const cardsContent = Object.values(content).map((item) => item.cards);

interface JourneyItem {
  sliced: boolean;
}

const Cards: React.FC<JourneyItem> = ({ sliced=false }) => {
  const getSlicedData = (type: string) => {
    const filtered = cardsContent.filter((item) => item.type === type);
    return sliced ? filtered.slice(0, 2) : filtered; // Apply slice only if sliced is true
  };

  return (
    <>
      <Tabs
        defaultValue="experience"
        className="w-full flex flex-col items-center"
      >
        <TabsList className="max-w-max mb-[30px]">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">My Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {getSlicedData("experience").map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="education" className="w-full">
          <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
              {getSlicedData("education").map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
        <TabsContent value="skills" className="w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {getSlicedData("skills").map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Cards;
