import React, { useContext, useEffect, useState, useRef } from "react";
import { Route, Link } from "react-router-dom";
import _ from "lodash";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
const Home = ({authState,setAuthState}) => {
  const [version, setVersion] = useState('v1')
  useEffect(() => {
    console.log(authState);
  }, [authState]);
  return (
    <div className="wrapper">
      <div>
        {/* 유저 리스트 선택 | 버전 선택 부분 */}
        <div className="user_version">
          <div className="userlist">
            <select className="form-select" name="nvuser" id="nvuser">
              {authState &&
                _.get(authState, "nvuserlist").map((nvuser) => {
                  console.log(nvuser);
                  return (
                    <option
                      value={_.get(nvuser, "id")}
                      key={`nvuser_${_.get(nvuser, "id")}`}
                    >
                      {_.get(nvuser, "id")}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="version">
            <select className="form-select" name="version" id="version">
              <option value={`version1`}>version1</option>
              <option value={`version2`}>version2</option>
              <option value={`version3`}>version3</option>
            </select>
          </div>
        </div>

        <div className="version1">
          {/* 제목 부분 */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="keyword">
              키워드
            </span>
            <input
              type="text"
              className="form-control"
              id="keyword"
              placeholder="키워드를 입력해주세요"
              aria-describedby="keyword"
            />
          </div>
          {/* 본문 부분 */}
          <div class="input-group contentgroup">
            <span class="input-group-text">본문</span>
            <textarea class="form-control" aria-label="content"></textarea>
          </div>
          {/* 이미지 부분 */}
          <div className="imggroup">
            <h3 className="h4">이미지</h3>
            <Editor
              placeholder="내용을 입력해주세요."
              previewStyle="vertical" // 미리보기 스타일 지정
              height="500px" // 에디터 창 높이
              initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
              toolbarItems={[
                // 툴바 옵션 설정
                ["heading", "bold", "italic", "strike"],
                ["hr", "quote"],
                ["ul", "ol", "task", "indent", "outdent"],
                ["table", "image", "link"],
                ["code", "codeblock"],
              ]}
            ></Editor>
          </div>
          {/* 동영상 부분 */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="keyword">
              동영상
            </span>
            <input
              type="text"
              className="form-control"
              id="videourl"
              placeholder="스크롤할 페이지 url을 입력해주세요"
              aria-describedby="videourl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
