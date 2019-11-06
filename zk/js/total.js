$(function() {
    // 请求模拟数据
      getNumber();
      function getNumber() {
        var temp = '';
        var l = [0,0,0]
        $.ajax({
          type: "get",
          url: "querylist.json",
          dataType: "json",
          success: function(res) {
            
            //
              $.each(res,function(i,val){
                
                console.log(val)
              
                  
                for(l[i]=0;l[i]<val.total;l[i]+=10){
                  temp=`
                 
                  <div class="font-20">${val.name}</div>
                  <div class="font-number">${l[i]} <i>KG</i></div>
                 
                  ` 
                  
                  
                        
                }
                $("#jsonTal").append(temp);  
                console.log(l[i])
              

              })
            // 
            
            // var list = res
            //   temp +=`
                     
            //         <div class="svg-xsm">
            //             <div class="font-20">总库存</div>
            //             <div class="font-number">${list[0].total} <i>KG</i></div>
            //         </div>
            //         <div class="svg-xsm">
            //             <div class="font-20">当日入库</div>
            //             <div class="font-number">${list[1].inStorage} <i>KG</i> </div>
            //         </div>
            //         <div class="svg-xsm">
            //             <div class="font-20">当日出库</div>
            //             <div class="font-number">${list[2].outStorage} <i>KG</i></div>
            //         </div>                     
            //         `          
            // $("#jsonTal").append(temp);
          }
        });
      }
   })