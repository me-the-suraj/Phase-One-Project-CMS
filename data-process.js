
 $(document).ready(function(){

    $("#wowo").click(function(){

    var news_cat = document.getElementById('news_cat').value;
    var news_title = document.getElementById('news_title').value;
    var news_desc = document.getElementById('news_desc').value;
    var news_cover = document.getElementById('news_cover').value;
    var news_cover = news_cover.replace("C:\\fakepath\\", ''); 
    
    //C:\fakepath\cover-image-2.png
    //alert(news_cover)
    //$("button").filter("#AddPost").attr("aria-expanded", "false");
    //$("button").filter("#AddPost").attr("class", "navbar-toggler btn-lg collapsed");

    
    $("div").filter("#navbarHeader").attr("class", "collapse bg-light");

    //alert(news_cover);
    
    document.getElementById("content").reset();

    var new_post = "<div class='col-md-4 d-flex'> <div class='card mb-4 box-shadow'> <img class='card-img-top' src='"+ news_cover +"' alt='Card image cap'> <div class='card-body'> <h5>"+ news_title +"</h5> <p class='card-text text-justify'>"+ news_desc +"</p> <div class='d-flex justify-content-between align-items-center'> <div class='btn-group'> <button type='button' class='btn btn-sm btn-secondary'>Read More</button> </div> <small class='text-muted'>Today</small> </div> </div> </div> </div>"; 
  
    if(news_cat == "mongodb"){              
        
        $("#mongodb_news").prepend(new_post);
        new_post = null;
        
    }else if(news_cat == "express"){

        $("#express_news").prepend(new_post);
        new_post = null;

    }else if(news_cat == "angular"){

        $("#angular_news").prepend(new_post);
        new_post = null;
        
    }else if(news_cat == "nodejs"){

        $("#nodejs_news").prepend(new_post);
        new_post = null;
        
    }

    });

    $("#thankyou").click(function(){ 
        
    var subscriber = document.getElementById('subscriber').value;
    if(subscriber == ""){ alert("Please Enter Email Id") } else{
    alert("Thank You, for Subscribing TechNews Blog. We'll get back to you. \n E-mail: "+subscriber);
    }

    });
  
   
  });



