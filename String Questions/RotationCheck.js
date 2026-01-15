function Rotation(str1,str2){
    if(str1.length !== str2.length) return false;
    let combine = str1 + str1;
    return combine.includes(str2);
}