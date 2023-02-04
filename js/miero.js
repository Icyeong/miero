$(document).ready(function(){
                
                
                var ww = $(window).width();
    
                
                
                $('.sub_menu').hover(function(){
                    $(this).transition({
                        backgroundColor:'#fd6b1e'
                    },200);
                    
                    $(a,this).transition({
                        backgroundColor:'white'
                    },100);
                },function(){
                    $(this).transition({
                        backgroundColor:'white'
                    },200);
                    
                    $(a,this).transition({
                        backgroundColor:'black'
                    },100);
                    
                    
                });
                
                
                //menu click event
                
                var menu = $('.menu').each(function(index){
                    $(this).attr('data-index',index);
                });
    
                var sub = $('.sub_wrap').each(function(index){
                    $(this).attr('data-index',index);
                });
                
                
               /* $('.menu').click(function(){
                    menu = $(this).attr('data-index');
                    
                    
                    $('.sub_wrap').css({
                        display:'none'
                    });
                    
                    $('.sub_wrap').eq(menu).css({
                        display:'block'
                    });
                    
                    $('section').click(function(){
                        $('.sub_wrap').css({
                            display:'none'
                        });
                    });
                    
                });*/
    
    
                 $('.menu').click(function(){
                    menu = $(this).attr('data-index');
                    sub = $(this).attr('data-index');
                    
                    
                     
                     
                     $('.sub_wrap[data-index!='+menu+']').removeClass('on');
                     
                     $('.sub_wrap').eq(menu).toggleClass('on');
                     
                     
                     $('section').click(function(){
                        $('.sub_wrap').removeClass('on');
                    });
                    
                });
    
    
    
                
                
                
                
                
                
                /////////////////////////////////header end
                
                var a=0;
    
    
                
                $('.right').click(function(){
                    
                    
                    if(a==0){
                        $('.img_box_a').transition({
                            opacity:0
                        },1500);
                        $('.img_box_b').transition({
                            opacity:1
                        },1500);
                        $('.btn:nth-child(2)').transition({
                            backgroundColor:'#ff5b12'
                        },500);
                        $('.btn:nth-child(1)').transition({
                            backgroundColor:'white'
                        },500);
                        a++;
                    }else if(a==1){
                        $('.img_box_b').transition({
                            opacity:0
                        },1500);
                        $('.img_box_c').transition({
                            opacity:1
                        },1500);
                        $('.btn:nth-child(3)').transition({
                            backgroundColor:'#ff5b12'
                        },500);
                        $('.btn:nth-child(2)').transition({
                            backgroundColor:'white'
                        },500);
                        a++;
                    }else if(a==2){
                        $('.img_box_c').transition({
                            opacity:0
                        },1500);
                        $('.img_box_a').transition({
                            opacity:1
                        },1500);
                        $('.btn:nth-child(1)').transition({
                            backgroundColor:'#ff5b12'
                        },500);
                        $('.btn:nth-child(3)').transition({
                            backgroundColor:'white'
                        },500);
                        a=0;
                    }
                });
                
                $('.left').click(function(){
                    if(a==0){
                        $('.img_box_a').transition({
                            opacity:0
                        },1500);
                        $('.img_box_c').transition({
                            opacity:1
                        },1500);
                        $('.btn:nth-child(3)').transition({
                            backgroundColor:'#ff5b12'
                        },500);
                        $('.btn:nth-child(1)').transition({
                            backgroundColor:'white'
                        },500);
                        a=2;
                    }else if(a==2){
                        $('.img_box_c').transition({
                            opacity:0
                        },1500);
                        $('.img_box_b').transition({
                            opacity:1
                        },1500);
                        $('.btn:nth-child(2)').transition({
                            backgroundColor:'#ff5b12'
                        },500);
                        $('.btn:nth-child(3)').transition({
                            backgroundColor:'white'
                        },500);
                        a--;
                    }else if(a==1){
                        $('.img_box_b').transition({
                            opacity:0
                        },1500);
                        $('.img_box_a').transition({
                            opacity:1
                        },1500);
                        $('.btn:nth-child(1)').transition({
                            backgroundColor:'#ff5b12'
                        },500);
                        $('.btn:nth-child(2)').transition({
                            backgroundColor:'white'
                        },500);
                        a--;
                    }
                });
    
                setInterval(function(){
                    
                    a++;
                    if(a>2){
                        a=0;
                    }
                    
                    if(a==0){
                        $('.img_box_a').transition({
                            opacity:0
                        },1500);
                        $('.img_box_b').transition({
                            opacity:1
                        },1500);
                        $('.btn:nth-child(2)').transition({
                            backgroundColor:'#ff5b12'
                        },500);
                        $('.btn:nth-child(1)').transition({
                            backgroundColor:'white'
                        },500);
                    }else if(a==1){
                        $('.img_box_b').transition({
                            opacity:0
                        },1500);
                        $('.img_box_c').transition({
                            opacity:1
                        },1500);
                        $('.btn:nth-child(3)').transition({
                            backgroundColor:'#ff5b12'
                        },500);
                        $('.btn:nth-child(2)').transition({
                            backgroundColor:'white'
                        },500);
                    }else if(a==2){
                        $('.img_box_c').transition({
                            opacity:0
                        },1500);
                        $('.img_box_a').transition({
                            opacity:1
                        },1500);
                        $('.btn:nth-child(1)').transition({
                            backgroundColor:'#ff5b12'
                        },500);
                        $('.btn:nth-child(3)').transition({
                            backgroundColor:'white'
                        },500);
                    }
                    
                    
                },2000);
                
                /*setInterval(function(){
                    $('.right').trigger('click');
                },4000);*/
                ///////////////////////////////////section_1 end
                
                var c = 0;
                
                $('.tab_box_j').each(function(index){
                    $(this).attr('data-index',index);
                });
                
                $('.tab_btn_j').each(function(index){
                    
                    $(this).attr('data-index',index);
                }).click(function(){
                    
                    index = $(this).attr('data-index');
                    
                    $('.tab_box_j[data-index='+index+']').slideUp(600);
                    
                    $('.tab_box_j').slideUp(600);
                    $('.tab_box_j').eq(index).slideDown(600);
                    
                    
                    $('.tab_btn_j').removeClass('bg_active');
                    $('.tab_btn_j').eq(index).addClass('bg_active');
                    
                });
                
                
                
                
                /////////////////////////////////section_3 end
                var b=0;
                var slide_wrap=$('.con_5').width();
                
    
    
                $('.right_2').click(function(){
                    
                    b++;
                    if(b>2){
                        b=0;
                    }
                    $('.slide_wrap').animate({
                            left:-slide_wrap*b
                        });
                    $('.slide_wrap').css({
                            left:-slide_wrap*b
                        });
                    
                });
    
                
                $('.left_2').click(function(){
                    
                    b--;
                    if(b<0){
                        b=2;
                    }
                    $('.slide_wrap').animate({
                            left:-slide_wrap*b
                        }) ;
                    $('.slide_wrap').css({
                            left:-slide_wrap*b
                        });
                    
                });
    
                
                $(window).resize(function(){
                    ww = $(window).width();
                    slide_wrap=$('.con_5').width();
                    $('.slide_wrap').css({
                            left:-slide_wrap*b
                        });
                });
                
                
                
                
                /////////////////////////////////////section_5 end
                
                var slide =$('.img_box_6').each(function(index){
                    $(this).attr('data-index',index);
                    });
                
                $('.img_box_6').mouseenter(function(){
                    slide =$(this).attr('data-index');
                    
                    $('.slide_box_6').eq(slide).animate({
                        bottom:0
                    },350).css({
                        opacity:1
                    });
                    
                });
                
                $('.img_box_6').mouseleave(function(){
                    slide =$(this).attr('data-index');
                    
                    $('.slide_box_6').eq(slide).animate({
                        bottom:-95
                    },150).css({
                        opacity:0.6
                    });
                    
                });
                
                /////////////////////////////////section_6 end
                
                $('.footer span').hover(function(){
                    $(this).transition({
                        color:'#22567c'
                    },400);
                },function(){
                    $(this).transition({
                        color:'#ff5800'
                    },400);
                });
                
                $('.footer a').hover(function(){
                    $(this).transition({
                        color:'#ff5800'
                    },200);
                },function(){
                    $(this).transition({
                        color:'white'
                    },100);
                });
                /////////////////////////////////section_7 end
                
                $('.top_btn').click(function(){
                    $('html,body').animate({
                        scrollTop:0
                    });
                });
                
                
                
                
            });//end