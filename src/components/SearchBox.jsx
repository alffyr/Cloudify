import React from "react";
import { Icon } from "@iconify/react";

const SearchBox = () => {
  return (
    <div>
      <form action="">
        <div className="flex w-fit px-4 py-2 rounded-3xl bg-[#EDEDEF]">
          <input type="text" placeholder="Masukkan Nama Wilayah" className="outline-none pr-20 bg-[#EDEDEF]"/>
          <button><Icon icon="icon-park-outline:search" /></button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
