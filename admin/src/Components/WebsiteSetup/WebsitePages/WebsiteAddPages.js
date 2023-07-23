import React, { useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import { EditorState,convertToRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";  


function WebsiteAddPages() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());


    const handleConvertToHTML = (newEditorState) => {
      const contentState = editorState.getCurrentContent();
      const rawContentState = convertToRaw(contentState);
      const html = draftToHtml(rawContentState);
      setEditorState(newEditorState)
      console.log(html);
    };
    
    return (
    <>
            <div className="container-fluid allproducts">
        <div className="innerallproducts">
          <div className="productheading">
            <div className="productheadingtop">
              <h3 class="mb-0 h6 text-center">Add New Page</h3>
              </div>
              <div className="productsfilter">
            </div>
                    <div class="card">                
                        <form class="px-4">

                            <div class="card-header px-0">
                            <h3 class="mb-0 h6" style={{fontSize:"1rem", fontWeight:"500"}}>Add New Page</h3>
                            </div>
                            <div class="card-body px-0" >
                                <div class="form-group row pb-3">
                                    <label class="col-sm-2 col-from-label" for="name">Title <span class="text-danger">*</span> <i class="las la-language text-danger" title="Translatable"></i></label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" placeholder="Title" name="title" value="Seller Policy Pages" required="" fdprocessedid="x5rxpj" />
                                    </div>
                                </div>


                                <div class="form-group row pb-3">
                                    <label class="col-sm-2 col-from-label" for="name"style={{fontSize:".8rem"}}>Link <span class="text-danger">*</span></label>
                                    <div class="col-sm-10">
                                        <div class="input-group d-block d-md-flex">
                                            <input class="form-control w-100 w-md-auto"  />
                                        </div>
                                        <small class="form-text text-muted" style={{fontSize:".8rem"}}>Use character, number, hypen only</small>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-sm-2 col-from-label" for="name"  style={{fontSize:".8rem"}}>Add Content <span class="text-danger">*</span></label>
                                    <div class="col-sm-10 px-0 py-0 rounded-2 border">
                                     <Editor 
        editorState={editorState}
        onEditorStateChange={handleConvertToHTML}
        


        />
                                        </div>
                                        </div>
                                    </div>

                                    <div class="card-header px-0 mt-4">
                                        <h5 class="mb-0"  style={{fontSize:"1rem", fontWeight:"500"}}>Seo Fields</h5>
                                    </div>
                                    <div class="card-body px-0">

                                        <div class="form-group row pb-3">
                                            <label class="col-sm-2 col-from-label"  style={{fontSize:".8rem"}} for="name">Meta Title</label>
                                            <div class="col-sm-10">
                                                <input type="text" class="form-control" placeholder="Title" name="meta_title" value="" fdprocessedid="lr9i1" />
                                            </div>
                                        </div>

                                        <div class="form-group row pb-3">
                                            <label class="col-sm-2 col-from-label"  style={{fontSize:".8rem"}} for="name">Meta description</label>
                                            <div class="col-sm-10">
                                                <textarea class="resize-off form-control" placeholder="Description" name="meta_description"></textarea>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2 col-from-label" for="name"  style={{fontSize:".8rem"}}>Keywords</label>
                                            <div class="col-sm-10">
                                                <textarea class="resize-off form-control" placeholder="Keyword, Keyword" name="keywords"></textarea>
                                                <small class="text-muted">Separate with coma</small>
                                            </div>
                                        </div>

                                        <div class="form-group row mt-3">
                                            <label class="col-sm-2 col-from-label" for="name"  style={{fontSize:".8rem"}}>Meta Image</label>
                                            <div class="col-sm-10">
                                            <div class="mb-3">
                                                    <input class="form-control" type="file" id="formFile" />
                                                </div>
                                                {/* <div class="file-preview">
                                                </div> */}
                                            </div>
                                        </div>

                                        <div class="text-right d-flex justify-content-end mt-4">
                                            <button type="submit" class="btn btn-sm rounded-pill" fdprocessedid="kcfzna"
                                            style={{ color: "#103A81",
                                            fontWeight: "bold",
                                            backgroundColor: "#E7F4FC",}}
                                            >Update Page</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
                </div>
            </>
            )
}

            export default WebsiteAddPages
