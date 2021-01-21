export function calculateHealth(health: number, attack: number, armor: number) {
    const damage = attack - armor
    if (damage > 0) {
        return health - damage
    } else {
        return health - 1
    }
}
