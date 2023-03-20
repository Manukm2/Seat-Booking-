 var c=0;
 var pass=0;
 //no.of seat 
 var nns=0;
 //seat number
 var pb=0;

 alert("enter number of tickets")

//function 1
function count(A)
{  
   var ns=document.getElementById('noseat').value
   var temp=document.getElementById("s"+A).innerHTML
  
  // only one seat selected at a single click
   if(ns==1)
   {
    //for selecting purpose
     if(temp!="B")
      {
       document.getElementById("s"+A).style.backgroundColor="orange"
       document.getElementById("s"+A).innerHTML="B"
       c++;
      }
      //for deselecting purpose
     else if(temp="B")
      {
       document.getElementById("s"+A).style.backgroundColor="palegreen"
       document.getElementById("s"+A).innerHTML=A
       c--;
      }
      // count no.of seats and the total price
      var x=document.getElementById("movie").value
      document.getElementById("count").innerHTML=c
      document.getElementById('total').innerHTML=c*x
    }


   // more than one seat selected at the single click 
  else
  {
    // for selecting purpose
    if(pass==0)
    {
        nns=ns;
        pb=A;
      
        for(var i=0;i<ns;i++)
        {
          document.getElementById("s"+(A+i)).style.backgroundColor="orange"
          document.getElementById("s"+(A+i)).innerHTML="B"
          pass++;
        }
        var r=document.getElementById("noseat").value
        document.getElementById('count').innerHTML=r
        var s=document.getElementById("movie").value
        document.getElementById('total').innerHTML=r*s
    }
    // for deselecting purpose
     else
     {
        for(var i=0;i<nns;i++)
        {
          document.getElementById("s"+(pb+i)).style.backgroundColor="palegreen"
          document.getElementById("s"+(pb+i)).innerHTML=pb+i
          pass--;
        }
        document.getElementById('count').innerHTML=0
        document.getElementById('total').innerHTML=0
    }   
  }
}
//function 2
function success()
{  
  for( var i=1;i<=48;i++)
  {
    var a= document.getElementById("s"+i).innerHTML
    if(a=="B")
    document.getElementById("s"+i).style.backgroundColor="lightgrey"
  }

  alert("Ticket booked successfully")
}

