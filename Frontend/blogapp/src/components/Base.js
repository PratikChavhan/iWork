import CustomNavbar from "./CustomNavbar";

const Base=({title="Welcome to our website",children})=>{
// this is the component that we can use anywhere we required
// this is also known as master page that we can use this page in multiple pages
    return(
        <div className="container-fluid p-0 m-0">  
        {/* p-0 m-0 used for the padding and margin */}
               <CustomNavbar />
                    {children}
            
        </div>
    );
};
 
export default Base;