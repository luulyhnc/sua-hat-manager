const d=new Date(); const iso=(n=0)=>new Date(d.getTime()+n*86400000).toISOString().slice(0,10);
export const seed={materials:[
{id:'m1',code:'NPL0001',name:'Hạt điều vỡ',supplier:'Nông sản Việt',unit:'kg'},
{id:'m2',code:'NPL0002',name:'Yến mạch cán',supplier:'Green Farm',unit:'kg'},
{id:'m3',code:'NPL0003',name:'Chai thủy tinh 300ml',supplier:'Bao bì An Phát',unit:'chai'},
{id:'m4',code:'NPL0004',name:'Đường phèn',supplier:'Nông sản Việt',unit:'kg'}],lots:[
{id:'l1',materialId:'m1',lotNo:'DIEU-0801',receivedDate:iso(-12),expiryDate:iso(75),unitPrice:168000,receivedQty:30,remainingQty:24},
{id:'l2',materialId:'m2',lotNo:'YM-0725',receivedDate:iso(-18),expiryDate:iso(42),unitPrice:62000,receivedQty:45,remainingQty:31.5},
{id:'l3',materialId:'m3',lotNo:'CHAI-08',receivedDate:iso(-8),expiryDate:null,unitPrice:4800,receivedQty:500,remainingQty:386},
{id:'l4',materialId:'m4',lotNo:'DP-0702',receivedDate:iso(-30),expiryDate:iso(320),unitPrice:36000,receivedQty:25,remainingQty:19}],issues:[
{id:'x1',date:iso(-2),batch:'Mẻ 0817-SEN',product:'Sữa hạt sen',status:'posted',lines:[{materialId:'m1',qty:2,unitPrice:168000},{materialId:'m3',qty:40,unitPrice:4800}]},
{id:'x2',date:iso(0),batch:'Mẻ thử nghiệm',product:'Sữa yến mạch',status:'draft',lines:[{materialId:'m2',qty:3,unitPrice:62000}]}]};
export const money=n=>new Intl.NumberFormat('vi-VN').format(Math.round(Number(n)||0));
