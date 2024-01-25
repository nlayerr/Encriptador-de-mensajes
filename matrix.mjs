// matrix.mjs

const initializeCanvas = () => {
    const canvas = document.getElementById('canv');
    const ctx = canvas.getContext('2d');
    const w = canvas.width = document.body.offsetWidth;
    const h = canvas.height = document.body.offsetHeight;
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);

    return { ctx, w, h, ypos };
};

const drawMatrix = (canvasData) => {
    const { ctx, w, h, ypos } = canvasData;
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = '#0f0';
    ctx.font = '15pt monospace';
    ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
    });
};

const startMatrixAnimation = (canvasData) => {
    return setInterval(() => drawMatrix(canvasData), 50);
};

const stopMatrixAnimation = (intervalId) => {
    clearInterval(intervalId);
};

export default { initializeCanvas, drawMatrix, startMatrixAnimation, stopMatrixAnimation };
