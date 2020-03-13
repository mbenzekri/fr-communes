function pixel2key(pixel) {
    const hcolor = ((pixel[0] * 256) + pixel[1]) * 256 + pixel[2]
    const key = parseInt(hcolor.toString(16), 10).toString().padStart(6, '0')
    return key
}
