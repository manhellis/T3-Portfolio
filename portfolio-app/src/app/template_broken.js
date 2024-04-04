'use client'

import { tangents } from '@gltf-transform/functions';
import { motion } from 'framer-motion';

// current issue is that grid cols are being made in the body not the main tag
// need to refactor css grid Layout, then this will work 
export default function Template({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            // style={{ display: "contents" }}
            // style="display: contents;"
        >
            {children}
        </motion.div>
    ) 
  }