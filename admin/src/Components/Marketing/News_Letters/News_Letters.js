import React, { useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./News_Latters.css"
import Select from "react-select";
function News_Letters() {
    var [editorState, setEditorState] = useState(EditorState.createEmpty()),


onEditorStateChange = (editorState) => {
    setEditorState(editorState);

   
};
const options = [
    {value:"jjjdfhjs", label:"dsafaafahg"},
    {value:"jjjdfhjs", label:"dsafaafahg"},
    {value:"jjjdfhjs", label:"dsafaafahg"},


]
  return (
    <div>
          <div className="container-fluid allproducts">
      <div class="card">
            <div class="card-header">
                <h3 class="mb-0" style={{ fontSize: "1rem", fontWeight: "500" }}>
                Send Newsletter
            </h3>
            </div>

            <div class="card-body">
                <form class="form-horizontal">
     <div class="form-group row">
                        <label style={{fontWeight:"600", fontSize:".9rem"}} class="col-sm-2 col-from-label" for="name">Emails (Users)</label>
                        <div class="col-sm-10">
                        <Select
                        options={options}
                        name="attributedata"
                      
                        className="form-control p-0 attributedata"
                        classNamePrefix="select"
                        isClearable
                      />
                        </div>
                    </div>
                    <div class="form-group row mb-3 mt-3">
                        <label style={{fontWeight:"600", fontSize:".9rem"}} class="col-sm-2 col-from-label" for="name">Emails (Subscribers)</label>
                        <div class="col-sm-10">
                        <Select
                        options={options}
                        name="attributedata"
                      
                        className="form-control p-0 attributedata"
                        classNamePrefix="select"
                        isClearable
                      />

                        </div>
                    </div>
                    <div class="form-group row mb-3">
                        <label style={{fontWeight:"600", fontSize:".9rem"}} class="col-sm-2 col-from-label" for="subject">Newsletter subject</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" name="subject" id="subject" required />
                        </div>
                    </div>
                    <div class="form-group row mb-2">
                        <label style={{fontWeight:"600", fontSize:".9rem"}} class="col-sm-2 col-from-label" for="name">Newsletter content</label>
                        <div class="col-sm-10">
      <div className="p-2 border bg-light rounded" style={{minHeight:"250px", maxWidth: `100%`}}>
                      
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
                    </div>
                    <div class="form-group mb-0 text-right">
                        <button type="submit" class="btn btn-sm rounded-pill"
                         style={{
                            color: "#103A81",
                            fontWeight: "bold",
                            backgroundColor: "#E7F4FC",
                          }}
                        >Send</button>
                    </div>
                  </form>
              </div>
        </div>
        </div>
    </div>
  )
}

export default News_Letters
