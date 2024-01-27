const pageInit = (req, res)=>{
    res.render("home", {
        page: "Home",
      });
}

export {
    pageInit
}