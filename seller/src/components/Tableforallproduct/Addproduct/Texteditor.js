import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./stylefortext.css"
export default function App() {
//   const [editorState, setEditorState] = useState(() =>
//     EditorState.createEmpty()
//   );
//   useEffect(() => {
//     console.log(editorState);
//   }, [editorState]);

var [editorState, setEditorState] = useState(EditorState.createEmpty()),


onEditorStateChange = (editorState) => {
    setEditorState(editorState);
};
  return (
    <div style={{width:"100%"}} >
      <h6 style={{fontSize:".9rem", fontWeight:"600", color:"#475467"}}>Product Title</h6>
      <input type="text"  style={{fontSize:`.8rem`,backgroundColor:"#FCFCFD"}} className="form-control border" placeholder="Urban Ladder Pashe Chair" aria-label="Username" aria-describedby="addon-wrapping"
    
      />
      <h6 className="mt-2" style={{fontSize:".9rem", fontWeight:"600", color:"#475467"}}>Product Description</h6>
      <div className="p-2 border" style={{minHeight:"250px", maxWidth: `100%`}}>
        <Editor 
        placeholder="Tommy Hilfiger men striped pink sweatshirt. Crafted with cotton. Material Composition is 100% oraganic cotton. this is one of the worlds leading designer lifestyle brands and is Internationally recoginized for celebrating the essence of classic American cool style, featuring, preppy with a Twist designs."
         editorState={editorState}
         onEditorStateChange={onEditorStateChange}
         toolbar={{
           options: ["blockType","fontSize","inline",'link','image','list'],
           inline: {
             inDropdown: false,
             className: "test",
             component: undefined,
             dropdownClassName: undefined,
             options: [ 'bold', 'italic','underline'],
             bold: { className: "test", style: { color: "red" } },
             italic: { className: undefined },
             underline: { className: undefined },
           },
           link: {
            options: [ 'link'],
           },
           list:{
            options: [ 'unordered','ordered'],
           }
         }}

        />
      </div>
    </div>
  );
}