window.addEventListener('load',function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.shadowBlur = 5;
    ctx.shadowColor = 'black';

    let drawing = false;
    let angle = 0;
    
    

    function drawShape(x, y ,radius, inset, n,color){
        ctx.fillStyle = "rgb("+ color +","+ color +","+ color +")";
        //ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.save();
        ctx.translate(x,y);
        ctx.moveTo(0, 0 -radius);

        for (let i = 0; i < n; i++){
            ctx.rotate(Math.PI / n);
            ctx.lineTo(0, 0 - (radius * inset));
            ctx.rotate(Math.PI / n);
            ctx.lineTo(0, 0 - radius);
            
        }
        ctx.restore();
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
    const radius =50;
    const inset = 0.7;
    const n = 10;
   
    window.addEventListener('mousedown', function(){
        drawing = true;
    });
    window.addEventListener('mouseup', function(){
        drawing = false;
    });

        window.addEventListener('mousemove', function(e){
            if(drawing){
                ctx.fillStyle = 'rgba(100,100,100, 0.009)'
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                //main star
                ctx.save();
                ctx.translate(e.x, e.y);
                ctx.rotate(angle );
                drawShape(0, 0,radius, inset, n, 200);
                ctx.restore();

                
                // overcircle
                ctx.save();
                ctx.translate(e.x, e.y);
                ctx.rotate(angle);
                    
                drawShape(100, 50,radius * 0.1, 0.1, 20, 50);
                ctx.restore();
                //overcircle 2
                ctx.save();
                ctx.translate(e.x, e.y);
                ctx.rotate(-angle);
                    
                drawShape(200, 0,radius * 0.1, 0.1, 20, 50);
                ctx.restore();
                 
                //innercircle
                ctx.save();
                ctx.translate(e.x, e.y);
                ctx.rotate(-angle );
                drawShape(radius * 0.8,100,radius * 0.1, 1, n, 0);
                ctx.restore();

                ctx.save();
                ctx.translate(e.x, e.y);
                ctx.rotate(angle);
                drawShape(radius * 0.8,radius * 0.8,radius * 0.1, 1, n,0);
                ctx.restore();
                
                ctx.save();
                ctx.translate(e.x, e.y);
                ctx.rotate(-angle);
                drawShape(radius * 0.8,radius * 0.8,radius * 0.1, 0.1, n,100);
                ctx.restore();

                



                
                angle += 0.05;
                
                
            }
        });
        
});

