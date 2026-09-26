import { useEffect, useState } from 'react'
import { CircleUserRound, LogOut, Mail, ShieldCheck } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import api from '../api.js'
import Button from '../components/Button.jsx'

const roleLabels = {
  patient: 'Patient',
  admin: 'Admin',
}

function Profile() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('lumina_access_token')
    if (!token) {
      navigate('/login', { replace: true })
      return
    }

    let isActive = true

    async function loadProfile() {
      try {
        const response = await api.get('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (isActive) {
          setUser(response.data)
        }
      } catch (error) {
        if (!isActive) return

        if (error.response?.status === 401) {
          localStorage.removeItem('lumina_access_token')
          localStorage.removeItem('lumina_user')
          navigate('/login', { replace: true })
          return
        }

        setErrorMessage('Unable to load your profile. Please try again.')
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    loadProfile()
    return () => {
      isActive = false
    }
  }, [navigate])

  function handleLogout() {
    localStorage.removeItem('lumina_access_token')
    localStorage.removeItem('lumina_user')
    navigate('/login', { replace: true })
  }

  const displayRole = user ? roleLabels[user.role] || user.role : ''

  return (
    <section className="profile-page">
      <style>{`
        .profile-page {
          min-height: 620px;
          padding: 76px 0 96px;
          background: var(--color-bg-soft, #f7faf8);
        }
        .profile-wrap { width: min(900px, calc(100% - 48px)); margin-inline: auto; }
        .profile-heading { margin-bottom: 30px; }
        .profile-heading h1 {
          margin-top: 12px;
          color: var(--color-text, #213431);
          font-family: var(--font-display, Georgia, serif);
          font-size: 46px;
          font-weight: 400;
          line-height: 1.1;
        }
        .profile-heading p {
          margin-top: 10px;
          color: var(--color-muted, #667873);
          font-size: 13px;
          line-height: 1.7;
        }
        .profile-card {
          overflow: hidden;
          border: 1px solid var(--color-border, #e1e9e5);
          background: #fff;
          box-shadow: var(--shadow-soft, 0 12px 34px rgba(25, 65, 58, .06));
        }
        .profile-card-header {
          padding: 28px 32px;
          display: flex;
          align-items: center;
          gap: 18px;
          border-bottom: 1px solid var(--color-border, #e1e9e5);
          background: #fdfefd;
        }
        .profile-avatar {
          width: 58px;
          height: 58px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          color: var(--color-primary, #174e49);
          background: var(--color-primary-soft, #e4f1ed);
        }
        .profile-identity { min-width: 0; }
        .profile-identity > span {
          color: var(--color-muted, #667873);
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .profile-identity h2 {
          margin-top: 5px;
          overflow-wrap: anywhere;
          color: var(--color-text, #213431);
          font-family: var(--font-display, Georgia, serif);
          font-size: 26px;
          font-weight: 400;
        }
        .profile-details { padding: 6px 32px; }
        .profile-detail {
          min-height: 76px;
          display: grid;
          grid-template-columns: 190px minmax(0, 1fr);
          align-items: center;
          gap: 20px;
          border-bottom: 1px solid #edf1ef;
        }
        .profile-detail:last-child { border-bottom: 0; }
        .profile-detail dt {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--color-muted, #667873);
          font-size: 11px;
          font-weight: 600;
        }
        .profile-detail dt svg { color: var(--color-primary, #174e49); }
        .profile-detail dd {
          min-width: 0;
          margin: 0;
          overflow-wrap: anywhere;
          color: var(--color-text, #213431);
          font-size: 13px;
          font-weight: 600;
        }
        .profile-card-footer {
          padding: 20px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-top: 1px solid var(--color-border, #e1e9e5);
          background: #fbfdfc;
        }
        .profile-card-footer p { color: var(--color-muted, #667873); font-size: 11px; line-height: 1.6; }
        .profile-logout { min-height: 40px; flex: 0 0 auto; }
        .profile-state {
          padding: 28px 32px;
          border: 1px solid var(--color-border, #e1e9e5);
          color: var(--color-muted, #667873);
          background: #fff;
          font-size: 13px;
          line-height: 1.7;
        }
        .profile-error { color: #8a4c3e; }
        @media (max-width: 600px) {
          .profile-page { min-height: 520px; padding: 48px 0 64px; }
          .profile-wrap { width: min(100% - 32px, 900px); }
          .profile-heading h1 { font-size: 38px; }
          .profile-card-header { padding: 22px 20px; }
          .profile-avatar { width: 50px; height: 50px; }
          .profile-identity h2 { font-size: 22px; }
          .profile-details { padding-inline: 20px; }
          .profile-detail { min-height: 72px; grid-template-columns: 1fr; align-content: center; gap: 7px; }
          .profile-card-footer { padding: 18px 20px; align-items: flex-start; flex-direction: column; }
          .profile-state { padding: 22px 20px; }
        }
      `}</style>

      <div className="profile-wrap">
        <header className="profile-heading">
          <span className="eyebrow">Your account</span>
          <h1>My Profile</h1>
          <p>View your account information.</p>
        </header>

        {isLoading ? (
          <div className="profile-state" role="status">Loading profile...</div>
        ) : errorMessage ? (
          <div className="profile-state profile-error" role="alert">{errorMessage}</div>
        ) : user ? (
          <article className="profile-card">
            <div className="profile-card-header">
              <span className="profile-avatar" aria-hidden="true">
                <CircleUserRound size={30} strokeWidth={1.5} />
              </span>
              <div className="profile-identity">
                <span>Account profile</span>
                <h2>{user.full_name || 'Lumina Dental member'}</h2>
              </div>
            </div>

            <dl className="profile-details">
              <div className="profile-detail">
                <dt><CircleUserRound size={16} aria-hidden="true" /> Full name</dt>
                <dd>{user.full_name || '—'}</dd>
              </div>
              <div className="profile-detail">
                <dt><Mail size={16} aria-hidden="true" /> Email</dt>
                <dd>{user.email}</dd>
              </div>
              <div className="profile-detail">
                <dt><ShieldCheck size={16} aria-hidden="true" /> Account type</dt>
                <dd>{displayRole}</dd>
              </div>
            </dl>

            <footer className="profile-card-footer">
              <p>Your account information is shown here.</p>
              <Button type="button" className="profile-logout" onClick={handleLogout}>
                <LogOut size={16} aria-hidden="true" /> Log out
              </Button>
            </footer>
          </article>
        ) : null}
      </div>
    </section>
  )
}

export default Profile
