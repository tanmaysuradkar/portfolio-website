import React, { useEffect, useState } from 'react'

const cursor = () => {
      const [mousePossion, setmousePossion] = useState({ x: 0, y: 0 });
      const { x, y } = mousePossion;
      const updateMousePossion = (e) => {
        setmousePossion({ x: e.clientX, y: e.pageY });
      };
      useEffect(() => {
        window.addEventListener("mousemove", updateMousePossion);
        return () => {
          window.removeEventListener("mousemove", updateMousePossion);
        };
      }, []);
      return {x,y};
}

export default cursor