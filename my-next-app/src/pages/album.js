import Image from "next/image";

const Album = () => {
    return (
        <div>
            <h2>This image is using img tag</h2>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1dP2aS1xPDL8fvkc1sTtAAHaCd%26pid%3DApi&f=1&ipt=55b75010d1dc63916ba921c86b21f5ae70fe86ea2db52431dff8f49925d0b590&ipo=images" alt="" />

            <h2>Image component</h2>
            <Image src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1dP2aS1xPDL8fvkc1sTtAAHaCd%26pid%3DApi&f=1&ipt=55b75010d1dc63916ba921c86b21f5ae70fe86ea2db52431dff8f49925d0b590&ipo=images" 
                width={500} height={500}
            />
        </div>
    );
};

export default Album;