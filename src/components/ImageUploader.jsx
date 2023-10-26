import { ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import storage from "./firebase";

const ImageUploader = () => {
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const OnFileUploadToFirebase = (e) => {
    // console.log(e.target.files[0].name);
    const file = e.target.files[0];
    const storageRef = ref(storage, "images/" + file.name);
    const uploadImage = uploadBytesResumable(storageRef, file);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        setLoading(true); //ロード中
      },
      (error) => {
        console.log(error);
      },
      () => {
        setLoading(false); //ロード完了
        setUploaded(true); //初期表示の合否
      }
    );

    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };
  return (
    <div>
      {loading ? (
        <h2 className="state">ロード中・・・</h2>
      ) : (
        <div>
          {uploaded ? (
            <h2 className="state">ロード完了</h2>
          ) : (
            <div className="outerBox">
              <div className="title">
                <h2>画像アップローダー</h2>
                <p>JpegかPngの画像ファイル</p>
              </div>
              <div className="imageUplodeBox">
                <div className="imageLogoAndText">
                  <p>ここにドラッグ＆ドロップしてね</p>
                </div>
                <input
                  type="file"
                  className="imageUploadInput"
                  name="imageURL"
                  accept=".png, .jpg,.jpeg"
                  onChange={(e) => OnFileUploadToFirebase(e)}
                />
              </div>
              <p>または</p>
              <button>
                ファイルを選択
                <input
                  type="file"
                  className="imageUploadInput"
                  accept=".png, .jpg,.jpeg"
                  onChange={(e) => OnFileUploadToFirebase(e)}
                />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
