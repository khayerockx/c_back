const { default: mongoose } = require('mongoose')
const Member = require('../model/memberModel')


/**CREATE NEW MEMBER */
const createMember = async (req, res) => {
      const {
            member_id,
            firstname,
            middlename,
            lastname,
            contact_number,
            email,
            membership_date,
            status,
            hhhc_membership_number,
            bod_res, 
            coop_savings_account_number,
            kaya_atm_card_number,
            kaya_atm_savings_account_number,
            mbh,
            housing_equity,
            atm_passbook_fee,
            atm_status,
            pb_account_number,
            pb_account_number_series,
            passbook_series_number,
            affiliation_org,
            passbook_printed,
            remarks,
            notes,
            tin,
            coop_savings_passbook_number,
            address,
            dob,
            age,
            gender,
            civil_status,
            highest_educational_attainment,
            occupation,
            religion,
            annual_income,
            membership_type,
            initial_share_capital,
            initial_no_share,
            special_savings_account,
            impukan_certificate_account,
            number_of_dependent,
            pwd_type,
            termination_date,
            termination_bod,



            //not included
            //membership fee
            //share_capital_amount
            //coop savings amount
            //housing equity amount
            //special savings amount
            //Kaya savings amount




            

            


      } = req.body

      try {
            const member = await Member.create({
                  member_id,
                  firstname,
                  middlename,
                  lastname,
                  contact_number,
                  email,
                  membership_date,
                  status,
                  hhhc_membership_number,
                  bod_res,
                  coop_savings_account_number,
                  kaya_atm_card_number,
                  kaya_atm_savings_account_number,
                  mbh,
                  housing_equity,
                  atm_passbook_fee,
                  atm_status,
                  pb_account_number,
                  pb_account_number_series,
                  passbook_series_number,
                  affiliation_org,
                  passbook_printed,
                  remarks,
                  notes,
                  tin,
                  coop_savings_passbook_number,
                  address,
                  dob,
                  age,
                  gender,
                  civil_status,
                  highest_educational_attainment,
                  occupation,
                  religion,
                  annual_income,
                  membership_type,
                  initial_share_capital,
                  initial_no_share,
                  special_savings_account,
                  impukan_certificate_account,
                  number_of_dependent,
                  pwd_type,
                  termination_date,
                  termination_bod,

            })
            res.status(200).json(member)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
}

const getAllMember = async (req, res) => {
      try {
            /**Workout.find - finding al entries from DB
             * await Workout.find() will run immediately even
             * if the "workout" variable is not called yet
             */
            const allMember = await Member.find({}).sort({ createdAt: -1 })
            //displaying response to user: all workouts from DB
            res.status(200).json(allMember)
      } catch (error) {
            res.status(400).json({ error: error.message })
      }
}

const getSingleMember = async (req, res) => {
      const { member_id } = req.params;
      try {
            const member = await Member.find({ member_id })
            console.log(member)
            //displaying response to user: single workout by ID from DB
            res.status(200).json(member)
      } catch (error) {
            res.status(400).json({ error: 'No member found' })
      }
}


const updateSingleMember = async (req, res) => {
      const { id } = req.params

      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No Member found' })
      }
      try {
            const singleMember = await Member.findOneAndUpdate({ _id: id }, {
                  ...req.body
            })

            //displaying response to user: deleted workout by ID from DB
            res.status(200).json(singleMember)
      } catch (error) {
            res.status(400).json({ error: 'No Member found' })
      }
}

const deleteSingleMember = async (req, res) => {
      //id of the request parameter. Ex: xxx/delete/12e3289je3o2jtu2
      const { id } = req.params;

      //check if the id passed in parameter is valid id.
      if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: 'No Member found' })
      }
      try {
            //deleting an entry with the id in the parameter
            const singleMember = await Member.findOneAndDelete({ _id: id })

            //return a response which is the deleted one.
            res.status(200).json(singleMember)
      } catch (error) {
            res.status(400).json({ error: 'No Member found' })
      }
}

module.exports = {
      createMember,
      getAllMember,
      getSingleMember,
      deleteSingleMember,
      updateSingleMember
}








