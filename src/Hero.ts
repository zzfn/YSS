class Hero {
    /**
     * 血量
     */
    health: number;
    /**
     * 攻击力
     */
    attack: number;
    /**
     * 护甲
     */
    armor: number;
    /**
     * 暴击率
     */
    criticalRate: number;
    /**
     * 暴击伤害
     */
    criticalAttack: number;

    constructor(health: number, attack: number, armor: number, criticalRate: number, criticalAttack: number) {
        this.health = health
        this.attack = attack
        this.armor = armor
        this.criticalRate = criticalRate
        this.criticalAttack = criticalAttack
    }
}


const CI_MU_TONG_ZI = new Hero(854, 140, 60, 0.1, 1.5)
const YAO_DAO_JI = new Hero(854, 141, 61, 0.12, 1.5)
const HUI_BI_SHOU = new Hero(1088, 100, 67, 0.1, 1.5)

export {Hero, CI_MU_TONG_ZI,YAO_DAO_JI,HUI_BI_SHOU}
