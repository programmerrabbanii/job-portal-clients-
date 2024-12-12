import { easeOut } from "motion";
import { motion } from "motion/react";
import bannar1 from "../assets/imgs/banner1.png";
import bannar2 from "../assets/imgs/banner2.png";
const Bannar = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse w-11/12 mx-auto">
          <div className="flex-1">
            <motion.img
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 10, delay: 2, repeat: Infinity }}
              src={bannar1}
              className=" h-52 w-96 rounded-lg shadow-2xl"
            />

            <motion.img
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, delay: 2, repeat: Infinity }}
              src={bannar2}
              className=" rounded-lg shadow-2xl"
            />
          </div>
          <motion.div
          animate={{y:[100, 0]}}
          transition={{duration:1, delay: 0.5}}
           
          className="flex-1">
            <h1
          
              className="text-5xl font-bold"
            >
              The{" "}
              <motion.span
                animate={{ color: ["#ff7a33", "#68ff33"] }}
                transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
              >
                Easiest Way
              </motion.span>{" "}
              to Get Your New Job
            </h1>
            <p className="py-6">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
