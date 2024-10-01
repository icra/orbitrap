function linear_regression(points){
  //points: [{x,y},{x,y},...{x,y}]
  let N = points.length; //number of points
  if(N<3){ throw new Error("N<3 points"); }

  //arrays of points
  let xi    = points.map(p=>p.x); //array x
  let yi    = points.map(p=>p.y); //array y
  let xi_sq = xi.map(x=>x*x);     //array x squared
  let yi_sq = yi.map(y=>y*y);     //array y squared
  let xiyi  = points.map(p=>{     //array x·y
    return p.x*p.y;
  });

  //sums of arrays
  let xi_sum    = xi.reduce((p,c)=>p+c,0);    //sum of x array
  let yi_sum    = yi.reduce((p,c)=>p+c,0);    //sum of y array
  let xi_sq_sum = xi_sq.reduce((p,c)=>p+c,0); //sum of x squared array
  let yi_sq_sum = yi_sq.reduce((p,c)=>p+c,0); //sum of y squared array
  let xiyi_sum  = xiyi.reduce((p,c)=>p+c,0);  //sum of x·y array

  //compute m (slope) and n (intercept) as (y = mx + n)
  let m = (N*(xiyi_sum) - yi_sum*xi_sum)/(N*xi_sq_sum - xi_sum*xi_sum);
  let n = (yi_sum - m*xi_sum)/N;

  //compute r squared
  let r_squared = Math.pow(N*xiyi_sum - xi_sum*yi_sum, 2)/((N*xi_sq_sum - Math.pow(xi_sum,2))*(N*yi_sq_sum - Math.pow(yi_sum,2)));

  //end
  return {m, n, r_squared};
}

//TEST
let points=[
  {x:30, y:25},
  {x:28, y:30},
  {x:32, y:27},
  {x:25, y:40},
  {x:25, y:42},
  {x:25, y:40},
  {x:22, y:50},
  {x:24, y:45},
  {x:35, y:30},
  {x:40, y:25},
];

console.log(linear_regression(points));
