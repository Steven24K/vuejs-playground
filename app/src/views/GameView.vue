<script>

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

export default {
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: 'none',
            log: [],
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // draw
                this.winner = 'draw'
            } else if (value <= 0) {
                // lost
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // draw
                this.winner = 'draw'
            } else if (value <= 0) {
                // we won!!!
                this.winner = 'player'
            }
        }
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: '0%' }
            }
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: '0%' }
            }
            return { width: this.playerHealth + '%' }
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0
        },
        mayUseHealling() {
            return this.playerHealth >= 100
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100
            this.monsterHealth = 100
            this.currentRound = 0
            this.winner = 'none'
            this.log = []
        },
        attackMonster() {
            this.currentRound++
            const attackValue = getRandomValue(5, 12)
            this.monsterHealth -= attackValue
            this.addLogMessage('player', 'attack', attackValue)
            this.attackPlayer()
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15)
            this.playerHealth -= attackValue
            this.addLogMessage('monster', 'attack', attackValue)
        },
        specialAttackMonster() {
            this.currentRound++
            const attackValue = getRandomValue(10, 25)
            this.monsterHealth -= attackValue
            this.attackPlayer()
            this.addLogMessage('player', 'Special attack', attackValue)
        },
        healPlayer() {
            this.currentRound++
            const healValue = getRandomValue(8, 20)
            if ((this.playerHealth + healValue) > 100) {
                this.playerHealth = 100
            } else {
                this.playerHealth += healValue
            }
            this.addLogMessage('player', 'heal', healValue)
            this.attackPlayer()
        },
        surrender() {
            this.winner = 'monster'
        },
        addLogMessage(who, what, value) {
            this.log.unshift({
                who,
                what,
                value
            })
        }
    }
}

</script>

<template>
    <header class="game-header">
        <h1>Monster Slayer</h1>
    </header>
    <div id="game">
        <section id="monster" class="container game-section">
            <h2>Monster Health</h2>
            <div class="healthbar">
                <div class="healthbar__value" :style="monsterBarStyles"></div>
            </div>
        </section>
        <section id="player" class="container">
            <h2>Your Health</h2>
            <div class="healthbar">
                <div class="healthbar__value" :style="playerBarStyles"></div>
            </div>
        </section>
        <section v-if="winner !== 'none'" class="container">
            <h2>Game Over!</h2>
            <h3 v-if="winner === 'monster'">You Lost!!!</h3>
            <h3 v-else-if="winner === 'player'">You won!!!</h3>
            <h3 v-else>It's a draw!!!</h3>
            <button class="game-button" @click="startGame">Start new game</button>
        </section>
        <section v-if="winner === 'none'" id="controls">
            <button class="game-button" @click="attackMonster">ATTACK</button>
            <button class="game-button" @click="specialAttackMonster" :disabled="mayUseSpecialAttack">SPECIAL
                ATTACK</button>
            <button class="game-button" @click="healPlayer" :disabled="mayUseHealling">HEAL</button>
            <button class="game-button" @click="surrender">SURRENDER</button>
        </section>
        <section id="log" class="container">
            <h2>Battle Log</h2>
            <ul>
                <li v-for="item in log">
                    The
                    <span :class="item.who === 'player' ? 'log--player' : 'log--monster'">{{ item.who }}</span>
                    performed
                    <span :class="item.what.includes('attack') ? 'log--damage' : 'log--heal'">
                        {{ item.what }} with value {{ item.value }}
                    </span>
                </li>
            </ul>
        </section>
    </div>
</template>

<style>
.game-header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0.5rem;
    background-color: #880017;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
}

.game-section {
    width: 90%;
    max-width: 40rem;
    margin: auto;
}

.healthbar {
    width: 100%;
    height: 40px;
    border: 1px solid #575757;
    margin: 1rem 0;
    background: #fde5e5;
}

.healthbar__value {
    background-color: #00a876;
    width: 100%;
    height: 100%;
}

.container {
    text-align: center;
    padding: 0.5rem;
    margin: 1rem auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 12px;
}

#monster h2,
#player h2 {
    margin: 0.25rem;
}

#controls {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.game-button {
    font: inherit;
    border: 1px solid #88005b;
    background-color: #88005b;
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    margin: 1rem;
    width: 12rem;
    cursor: pointer;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

.game-button:focus {
    outline: none;
}

.game-button:hover,
.game-button:active {
    background-color: #af0a78;
    border-color: #af0a78;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

.game-button:disabled {
    background-color: #ccc;
    border-color: #ccc;
    box-shadow: none;
    color: #3f3f3f;
    cursor: not-allowed;
}

#log ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

#log li {
    margin: 0.5rem 0;
}

.log--player {
    color: #7700ff;
}

.log--monster {
    color: #da8d00;
}

.log--damage {
    color: red;
}

.log--heal {
    color: green;
}
</style>