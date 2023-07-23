import React from 'react'
import "./Communication.css"
import MicNoneIcon from '@mui/icons-material/MicNone';
const Communication = () => {
    return (
        <div className='container-fluid' >
            <div className="container-fluid rounded-4" >
                <div className="row">
                    <div className="col-8">
                        <div className="card " id='title'>
                            <div className="row "  >
                                <h4>Title of communication message</h4>
                                <p>Dec 29, 2022</p>
                            </div>
                            <hr />
                            <div className="row mt-2 "  >
                                <p className='mb-4' > Dear Suppliers</p> <br />
                                <p>  Doloribus maiores atque. Inventore non assumenda commodi eum harum iusto
                                    consequatur quidem. Fugit quo facilis. Blanditiis quod modi ad est. Voluptatem
                                    dolorem voluptatum earum voluptate quam rem. Doloribus maiores atque. Inventore non
                                    assumenda commodi eum harum iusto consequatur quidem. Fugit quo facilis.
                                    Blanditiis quod modi ad est.</p>
                            </div>
                            <div className="row mt-0.5 "  >
                                <p> <b style={{ color: "black" }} >voluptatum earum voluptate</b> quam rem. Doloribus
                                    maiores atque. Inventore non assumenda commodi eum harum iusto consequatur quidem.
                                    Fugit quo facilis. Blanditiis quod modi ad est.</p>
                            </div>
                            <div className="row mt-0.5">
                                <p>voluptatum earum voluptate quam rem. Doloribus maiores atque. Inventore
                                    non assumenda commodi eum harum iusto consequatur quidem. Fugit quo
                                    facilis. Blanditiis quod modi ad est.</p>
                            </div>
                            <div className="mt-0.5" id='btn' >
                                <button type="button" className=" btn-sm">Small button</button>
                                <button type="button" className=" btn-sm">All Button Two</button>
                            </div>
                        </div>

                        <div className="card " id='title'>
                            <div className="row "  >
                                <h4>Christmas day big sale</h4>
                                <p>Dec 29, 2022</p>
                            </div>
                            <hr />
                            <div className="row mt-2 "  >
                                <p className='mb-4' > Dear Suppliers</p> <br />
                                <p>  Doloribus maiores atque. Inventore non assumenda commodi eum harum iusto
                                    consequatur quidem. Fugit quo facilis. Blanditiis quod modi ad est. Voluptatem
                                    dolorem voluptatum earum voluptate quam rem. Doloribus maiores atque. Inventore non
                                    assumenda commodi eum harum iusto consequatur quidem. Fugit quo facilis.
                                    Blanditiis quod modi ad est.</p>
                            </div>
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="Card image cap" />
                          
                        </div>

                        <div className="card " id='title'>
                            <div className="row "  >
                                <h4>Notice</h4>
                                <p>Dec 29, 2022</p>
                            </div>
                            <hr />
                            <div className="row mt-2 "  >
                                <p className='mb-4' > Dear Suppliers</p> <br />
                                <p>  Doloribus maiores atque. Inventore non assumenda commodi eum harum iusto
                                    consequatur quidem. Fugit quo facilis. Blanditiis quod modi ad est. Voluptatem
                                    dolorem voluptatum earum voluptate quam rem. Doloribus maiores atque. Inventore non
                                 .</p>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                <img className="card-img-top" src="https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image cap" />

                                </div>
                                <div className="col-6">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Card image cap" />

                                </div>
                            </div>
                          
                        </div>

                    </div>

                    <div className="col-4">
                            <div className="card " id='title-left'>
                            <div className="row  gap-1 "  >
                                <div className="col-2" >
                                    <div className="mic"><MicNoneIcon/></div>
                                </div>
                                <div className="col-8 mt-1" style={{lineHeight:"5px"}}>
                                <h4>Christmas day big sale</h4>
                                <p>Dec 29, 2022</p>
                                </div>
                            </div>
                            <hr />
                            <div className="row mt-2 "  >
                                <p className='mb-4' > Dear Suppliers</p> <br />
                                <p>  Doloribus maiores atque. Inventore non assumenda commodi eum harum iusto
                                        
                                    .</p>
                            </div>
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1452457436726-a8e6ea2adf29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Card image cap" />
                          
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Communication