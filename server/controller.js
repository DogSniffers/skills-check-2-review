module.exports = {
    getTransaction: async (req, res) => {
        const db = req.app.get('db');

        let transactions = await db.get_transactions().catch(err => res.status(500).send(err))

        transactions.forEach((e, i) => transactions[i].t_date = e.t_date.toDateString())

        res.status(200).send(transactions)
    },
    addTransaction: async (req, res) => {
        const {amount} = req.body
        
        const db = req.app.get('db');

        await db.add_transaction(new Date(), amount).then(()=>res.sendStatus(200)).catch(err => res.status(500).send(err))
    }
};
