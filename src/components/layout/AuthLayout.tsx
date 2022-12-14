import AuthWrapper from "components/cards/AuthWrapper";
import Loading from "components/common/Loading";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authUtils from "utils/authUtils";

const AuthLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authUtils.isAuthenticated();
      if (!isAuth) setLoading(false);
      else navigate("/");
    };
    checkAuth();
  }, [navigate]);
  return loading ? (
    <Loading fullHeight />
  ) : (
    <AuthWrapper>
      <Outlet />
    </AuthWrapper>
  );
};

export default AuthLayout;
