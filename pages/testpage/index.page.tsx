import {motion, AnimateSharedLayout, AnimatePresence} from "framer-motion";
import {NextPage} from "next";
import {useState} from "react";

const Testpage: NextPage = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(1);

    const spring = {
        type: "spring",
        stiffness: 300,
        damping: 40
    };

    return (
        // @ts-ignore
        <AnimateSharedLayout type="crossfade">
            <motion.div className="border-2 border-green-500 p-8 w-[200px]" layoutId="laycon1" layout>
                <button onClick={() => setSelectedItem(1)}>Select</button>
                <AnimatePresence>
                    <motion.div layoutId="lay1" className="bg-yellow-600 p-8" transition={spring}/>
                </AnimatePresence>
            </motion.div>
            <motion.div className="border-2 border-blue-500 p-8 w-[200px]" layoutId="laycon2" layout>
                <button onClick={() => setSelectedItem(2)}>Select</button>
                <AnimatePresence>
                    <motion.div layoutId="lay2" className="bg-green-600 rounded-full p-4" transition={spring}/>
                </AnimatePresence>
            </motion.div>
            <motion.div className="border-2 border-red-500 p-8 w-[200px]" layoutId="laycon3" layout>
                <button onClick={() => setSelectedItem(3)}>Select</button>
                <AnimatePresence>
                    <motion.div layoutId="lay3" className="bg-blue-500 rounded-full p-2" transition={spring}/>
                </AnimatePresence>
            </motion.div>
            <AnimatePresence>
                {selectedItem && (
                    <motion.div className="fixed w-full h-full bg-black" layoutId={`laycon${selectedItem}`} onClick={() => setSelectedItem(null)}>
                        <motion.div layoutId={`lay${selectedItem}`} className="bg-blue-500 rounded-full p-2" transition={spring}/>
                    </motion.div>
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
    )
}

export default Testpage;