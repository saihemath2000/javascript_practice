let count=1;
   let list1=[];
   function add(){ 
      str="str";
      var input1 = window.prompt("enter navitem");
      var input2 = window.prompt("enter it's route");
      list1.push(input2);
      var mydiv =document.getElementById('mynav');  
      str=str+(count.toString());
      var aTag = document.createElement('a');
      aTag.setAttribute("id",str);
      aTag.setAttribute("href",input2.toString());
      mydiv.appendChild(aTag); 
      document.getElementById(str).innerHTML=input1;
      localStorage.setItem(input2.toString(),input1);
      count=count+1;
    }
    function checkRefresh(){
      if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        keys = Object.keys(localStorage);
        temp="temp";
        i = keys.length;
        while(i--){
          temp=temp+i; 
          t=localStorage.getItem(keys[i]);
          var aTag = document.createElement('a');
          aTag.setAttribute("href",keys[i]);
          aTag.setAttribute("id",temp);
          var mydiv =document.getElementById('mynav');
          mydiv.appendChild(aTag); 
          document.getElementById(temp).innerHTML=t;
          temp="temp";
        }
      } 
    } 
   function removeLocalStorageValues(){
      var ker = window.prompt("enter navitem to remove");
      let j = localStorage.length;
      while (j-- > 0) {
          let key = localStorage.key(i);
          if(localStorage.getItem(key) === ker) {
            localStorage.removeItem(key);
            window.onload();
          }
       }
    }
    function editLocalStorageValues(){
        let hem=2;
        var ob = window.prompt("enter navitem to edit");
        let i = localStorage.length;
        while (i-- > 0) {
          let jar = localStorage.key(i);
            if(localStorage.getItem(jar) === ob) {
              hem=1;  
              var ob1 = window.prompt("enter new navitem");
              var ob2 = window.prompt("Also enter it's new route");          
              localStorage.setItem(ob2,ob1);
              localStorage.removeItem(jar); 
              window.onload();
            }
         }
         if(hem==2){
             alert("Oops no navitem found to edit");
         }
      }
      
