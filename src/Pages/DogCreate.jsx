import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
export default function DogCreate() {
  const [breed, setBreed] = useState("");
  const [dog, setDog] = useState({
    message: [
      "https://images.dog.ceo/breeds/pug/DSCF7495-2.jpg",
      "https://images.dog.ceo/breeds/pug/IMG_0226.jpg",
      "https://images.dog.ceo/breeds/pug/IMG_0233.jpg",
      "https://images.dog.ceo/breeds/pug/IMG_3507.jpg",
      "https://images.dog.ceo/breeds/pug/IMG_8459.jpg",
      "https://images.dog.ceo/breeds/pug/RoxyCruising.jpg",
      "https://images.dog.ceo/breeds/pug/Suki.jpg",
      "https://images.dog.ceo/breeds/pug/anotherbb.jpg",
      "https://images.dog.ceo/breeds/pug/bobby.jpg",
      "https://images.dog.ceo/breeds/pug/bobmarley.jpg",
      "https://images.dog.ceo/breeds/pug/brody-rufferee.jpg",
      "https://images.dog.ceo/breeds/pug/bruiser.jpg",
      "https://images.dog.ceo/breeds/pug/bubbaAgain.jpg",
      "https://images.dog.ceo/breeds/pug/c677d2fa5324.jpg",
      "https://images.dog.ceo/breeds/pug/django-resized.jpg",
      "https://images.dog.ceo/breeds/pug/lupita.jpg",
      "https://images.dog.ceo/breeds/pug/lupita_and_cats.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_10.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_10186.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_10193.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_10378.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_10842.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_1108.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11083.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11194.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11209.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11239.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11256.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11261.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11288.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11306.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11359.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11458.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11632.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11675.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11725.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11732.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11825.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11870.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11958.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11977.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_11979.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12025.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12080.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12120.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12128.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12130.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12149.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12224.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12260.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12275.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12350.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12432.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12447.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12589.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12611.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12625.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12761.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12781.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12807.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12808.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12819.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12860.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_12934.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13002.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13023.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13042.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13051.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13224.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13256.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13263.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13276.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13340.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13342.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13364.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13391.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13439.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13455.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13469.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13506.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13560.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13581.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13597.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13721.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13794.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13812.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13930.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13993.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_13995.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14017.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14111.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14142.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14154.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14179.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14265.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14311.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14449.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14536.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14549.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14563.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14594.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14647.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14654.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14683.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14711.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14768.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14832.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14927.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14984.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_14996.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15014.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15015.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15120.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15129.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15130.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15171.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_152.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15216.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15217.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15351.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15352.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15364.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15422.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15449.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15527.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15538.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15550.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15615.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15626.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15663.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15722.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15734.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15746.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15766.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15873.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15877.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15932.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15969.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_15981.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16082.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16087.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16132.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16150.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16178.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16217.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16330.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16334.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16337.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_1636.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_1639.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16426.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16433.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16434.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16447.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16453.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16471.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_16492.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_1975.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_2009.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_2041.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_2144.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_2154.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_237.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_2410.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_25.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_2611.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_2745.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_2777.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_326.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_3338.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_340.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_353.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_3644.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_3795.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_3938.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_4030.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_4036.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_4043.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_4189.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_476.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_481.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_483.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_4993.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_5069.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_5555.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_5621.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_5788.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_5834.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_5912.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_5976.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_609.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_6098.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_6274.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_630.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_6598.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_6627.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_6792.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_6966.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_7027.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_7255.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_7698.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_771.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_7801.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_7915.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_8075.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_8513.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_8583.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_8627.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_8724.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_8814.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_8887.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_8979.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_9008.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_9505.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_9642.jpg",
      "https://images.dog.ceo/breeds/pug/n02110958_9929.jpg",
      "https://images.dog.ceo/breeds/pug/threeBoys.jpg",
      "https://images.dog.ceo/breeds/pug/weiner.jpg",
      "https://images.dog.ceo/breeds/pug/willienelson.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_041234.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_070809.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_071023.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_074532.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_074816.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_075018.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_075427.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_080306.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_081858.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_084828.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_090821.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_095312.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_095543.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_104450.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_104458.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_112010.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_114654.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_122350.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_124524.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_143138.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_144409.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_151824.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_153357.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_162320.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_174753.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_192117.jpg",
      "https://images.dog.ceo/breeds/puggle/IMG_203642.jpg",
    ],
  });

  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  };
  useEffect(() => {}, []);

  // get the individual dog document (get request)

  return (
    <div>
      <Navbar />
    </div>
  );
}
