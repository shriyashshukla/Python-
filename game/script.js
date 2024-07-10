document.addEventListener('DOMContentLoaded', () => {
    const gameArea = document.getElementById('gameArea');
    const basket = document.getElementById('basket');
    const ball = document.getElementById('ball');

    let basketPosition = gameArea.offsetWidth / 2 - basket.offsetWidth / 2;
    let ballPositionX = Math.random() * (gameArea.offsetWidth - ball.offsetWidth);
    let ballPositionY = 0;
    let score = 0;

    basket.style.left = `${basketPosition}px`;

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && basketPosition > 0) {
            basketPosition -= 20;
        } else if (e.key === 'ArrowRight' && basketPosition < gameArea.offsetWidth - basket.offsetWidth) {
            basketPosition += 20;
        }
        basket.style.left = `${basketPosition}px`;
    });

    function updateBallPosition() {
        ballPositionY += 5;
        if (ballPositionY > gameArea.offsetHeight - ball.offsetHeight) {
            if (
                ballPositionX + ball.offsetWidth >= basketPosition &&
                ballPositionX <= basketPosition + basket.offsetWidth
            ) {
                score++;
                console.log('Score:', score);
            }
            ballPositionY = 0;
            ballPositionX = Math.random() * (gameArea.offsetWidth - ball.offsetWidth);
        }
        ball.style.top = `${ballPositionY}px`;
        ball.style.left = `${ballPositionX}px`;

        requestAnimationFrame(updateBallPosition);
    }

    updateBallPosition();
});
